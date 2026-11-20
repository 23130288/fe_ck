import users from "../json/usersAccount.json";
import usersInfo from "../json/usersInfo.json";

interface UserAccount {
  id: number;
  email: string;
  password: string;
}

interface UserInfo {
  id: number;
  username: string;
  fullName: string;
  displayName: string;
  email: string;
  birthDate: string;
  gender: string;
  phone: string;
  address: string;
  avatar: string;
}


export function login(email: string, password: string) {
  if (email.trim() === '') {
    throw new Error("Vui lòng nhập email");
  }
  if (password === '') {
    throw new Error("Vui lòng nhập mật khẩu");
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user =(users as UserAccount[]).find(
    u => u.email.toLowerCase() === normalizedEmail && u.password === password
  );

  if (!user) {
    throw new Error("Tài khoản hoặc mật khẩu không đúng");
  }

  const info = usersInfo.find(u => u.id === user.id);
  return {
    success: true,
    UserInfo: info,
    token: "fake-jwt-token"
  };
}

export function register(
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
  const normalizedEmail = email.trim().toLowerCase();
  const emailExists = (users as UserAccount[]).some(
    user => user.email.toLowerCase() === normalizedEmail
  ) 
  if (emailExists) {
    throw new Error("Tài khoản đã tồn tại");
  }

    const info = usersInfo.find(u => u.id === 3);

  return {
    success: true,
    UserInfo: info,
    token: "fake-jwt-token"
  };
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userInfo");
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  window.location.href = "/";
}