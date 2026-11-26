import {useCallback, useEffect, useRef, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    setDoc
} from "firebase/firestore";
import {auth, db} from "../firebase.ts";

export interface WishlistEntry {
    id: number;
    type: "tour" | "hotel";
    name: string;
    image: string;
    place: string;
    price: number;
}

const EMPTY_ENTRIES: WishlistEntry[] = [];

const getEntryKey = (type: WishlistEntry["type"], id: number) => `${type}_${id}`;

export function useWishlist() {
    const [uid, setUid] = useState<string | null>(null);
    const [authLoaded, setAuthLoaded] = useState(false);
    const [wishlistState, setWishlistState] = useState<{uid: string; entries: WishlistEntry[]}>({
        uid: "",
        entries: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [pendingKeys, setPendingKeys] = useState<Set<string>>(new Set());
    const pendingRef = useRef(new Set<string>());

    useEffect(() => onAuthStateChanged(
        auth,
        user => {
            setUid(user?.uid ?? null);
            setAuthLoaded(true);
            setLoading(Boolean(user));
            setError("");
        },
        authError => {
            setError(authError.message);
            setAuthLoaded(true);
            setLoading(false);
        }
    ), []);

    useEffect(() => {
        if (!authLoaded || !uid) {
            setLoading(false);
            return;
        }

        return onSnapshot(
            collection(db, "users", uid, "wishlist"),
            snapshot => {
                setWishlistState({
                    uid,
                    entries: snapshot.docs.map(item => item.data() as WishlistEntry)
                });
                setLoading(false);
                setError("");
            },
            snapshotError => {
                setError(snapshotError.message);
                setLoading(false);
            }
        );
    }, [authLoaded, uid]);

    const entries = wishlistState.uid === uid ? wishlistState.entries : EMPTY_ENTRIES;

    const toggleWishlist = useCallback(async (entry: WishlistEntry) => {
        if (!uid) {
            return;
        }

        const key = getEntryKey(entry.type, entry.id);
        if (pendingRef.current.has(key)) return;
        pendingRef.current.add(key);
        setPendingKeys(new Set(pendingRef.current));
        setError("");

        try {
            const entryRef = doc(db, "users", uid, "wishlist", key);
            const exists = entries.some(item => item.type === entry.type && item.id === entry.id);
            if (exists) {
                await deleteDoc(entryRef);
            } else {
                await setDoc(entryRef, entry);
            }
        } catch (writeError) {
            setError(writeError instanceof Error ? writeError.message : "Không thể cập nhật danh sách yêu thích.");
        } finally {
            pendingRef.current.delete(key);
            setPendingKeys(new Set(pendingRef.current));
        }
    }, [entries, uid]);

    const removeFromWishlist = useCallback(async (type: WishlistEntry["type"], id: number) => {
        if (!uid) {
            return;
        }

        const key = getEntryKey(type, id);
        if (pendingRef.current.has(key)) return;
        pendingRef.current.add(key);
        setPendingKeys(new Set(pendingRef.current));
        setError("");

        try {
            await deleteDoc(doc(db, "users", uid, "wishlist", key));
        } catch (writeError) {
            setError(writeError instanceof Error ? writeError.message : "Không thể cập nhật danh sách yêu thích.");
        } finally {
            pendingRef.current.delete(key);
            setPendingKeys(new Set(pendingRef.current));
        }
    }, [uid]);

    const isPending = useCallback(
        (type: WishlistEntry["type"], id: number) => pendingKeys.has(getEntryKey(type, id)),
        [pendingKeys]
    );

    return {
        entries,
        toggleWishlist,
        removeFromWishlist,
        loading,
        error,
        isPending,
        isAuthenticated: authLoaded && Boolean(uid)
    };
}
