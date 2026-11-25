import {useCallback, useEffect, useState} from "react";

export interface WishlistEntry {
    id: number;
    type: "tour" | "hotel";
    name: string;
    image: string;
    place: string;
    price: number;
}

const getStorageKey = () => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "null") as {email?: string} | null;
    const identity = userInfo?.email?.trim().toLowerCase() || "guest";
    return `wishlist:${identity}`;
};

const readWishlist = (): WishlistEntry[] => {
    const stored = localStorage.getItem(getStorageKey());
    return stored ? JSON.parse(stored) as WishlistEntry[] : [];
};

const writeWishlist = (entries: WishlistEntry[]) => {
    localStorage.setItem(getStorageKey(), JSON.stringify(entries));
    window.dispatchEvent(new Event("wishlistchange"));
};

export function useWishlist() {
    const [entries, setEntries] = useState<WishlistEntry[]>(readWishlist);

    useEffect(() => {
        const syncWishlist = () => setEntries(readWishlist());
        window.addEventListener("wishlistchange", syncWishlist);
        window.addEventListener("storage", syncWishlist);
        return () => {
            window.removeEventListener("wishlistchange", syncWishlist);
            window.removeEventListener("storage", syncWishlist);
        };
    }, []);

    const toggleWishlist = useCallback((entry: WishlistEntry) => {
        const currentEntries = readWishlist();
        const exists = currentEntries.some(item => item.type === entry.type && item.id === entry.id);
        const nextEntries = exists
            ? currentEntries.filter(item => item.type !== entry.type || item.id !== entry.id)
            : [...currentEntries, entry];
        writeWishlist(nextEntries);
        setEntries(nextEntries);
    }, []);

    const removeFromWishlist = useCallback((type: WishlistEntry["type"], id: number) => {
        const nextEntries = readWishlist().filter(item => item.type !== type || item.id !== id);
        writeWishlist(nextEntries);
        setEntries(nextEntries);
    }, []);

    return {entries, toggleWishlist, removeFromWishlist};
}
