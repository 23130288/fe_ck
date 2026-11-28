import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {auth, db} from "../firebase.ts";

interface UserInfo {
  id: number;
  username: string;
  fullName?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  birthDate?: string;
  gender?: string;
  phone?: string;
  phoneNumber?: string;
  nationality?: string;
  address?: string;
  avatar?: string;
  passport?: {
    passportNumber: string;
    issuingCountry: string;
    issueDate: string;
    expiryDate: string;
  };
}

export async function login(email: string, password: string) {
  if (email.trim() === '') {
    throw new Error("Vui lòng nhập email");
  }
  if (password === '') {
    throw new Error("Vui lòng nhập mật khẩu");
  }
  let credential;
  try {
    credential = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), password);
  } catch {
    throw new Error("Tài khoản hoặc mật khẩu không đúng");
  }
    const user = credential.user;
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await signOut(auth);
    throw new Error("Không có hồ sơ người dùng");
  }
  const userInfo = {...userSnap.data(), email: user.email ?? ""};
  sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  return {success: true, userInfo: userInfo as UserInfo, uid: user.uid};
}


export async function register(
  email: string,
  password: string,
  confirm: string,
  profile: UserInfo
) {
  if (email.trim() === '') {
    throw new Error("Vui lòng nhập email");
  }
  if (password === '') {
    throw new Error("Vui lòng nhập mật khẩu");
  }
  if (confirm === '') {
    throw new Error("Vui lòng xác nhận mật khẩu");
  }
  if (profile.username.trim() === '') {
    throw new Error("Vui lòng nhập tên tài khoản");
  }
  if (!profile.birthDate) {
    throw new Error("Vui lòng chọn ngày sinh");
  }
  if (!profile.gender) {
    throw new Error("Vui lòng chọn giới tính");
  }
  if (password !== confirm) {
    throw new Error("Mật khẩu xác nhận không khớp");
  }
  try {
    const credential = await createUserWithEmailAndPassword(auth, email.trim().toLowerCase(), password);
    const user = credential.user;
    const userInfo: UserInfo = {...profile, email: user.email ?? email.trim().toLowerCase(),};
    await setDoc(doc(db, "users", user.uid), userInfo);
    return {success: true, userInfo, uid: user.uid,};
  } catch (error) {
    const firebaseError = error as {code?: string};
    if (firebaseError.code === "auth/email-already-in-use") {
      throw new Error("Tài khoản đã tồn tại");
    }
    throw new Error(error instanceof Error ? error.message : "Không thể đăng ký tài khoản");
  }
}

export async function logout() {
  await signOut(auth);
  sessionStorage.removeItem("userInfo");
  window.location.href = "/";
}