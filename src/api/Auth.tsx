import users from "../json/usersAccount.json";
import usersInfo from "../json/usersInfo.json";

interface UserAccount {
  id: number;
  email: string;
  password: string;
}
export function login(email: string, password: string) {
  if (email == '') {
    throw new Error("Vui lòng nhập email");
  }
  if (password == '') {
    throw new Error("Vui lòng nhập mật khẩu");
  }

  const user = (users as UserAccount[]).find(
    u => u.email === email && u.password === password
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

export function register(email: string, password: string, confirm: string) {
  if (email == '') {
    throw new Error("Vui lòng nhập email");
  }
  if (password == '') {
    throw new Error("Vui lòng nhập mật khẩu");
  }
  if (confirm == '') {
    throw new Error('Vui lòng xác nhận mật khẩu')
  }
  if (password !== confirm) {
    throw new Error('Mật khẩu xác nhận không khớp')
  }
  let user = (users as UserAccount[]).find(
    u => u.email === email
  );
  if (user) {
    throw new Error("Tài khoản đã tồn tại");
  }
  return true;
}
export function registerInfo(username: string, number: string, address: string, avatar: string) {
}
export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userInfo");
  window.location.href = "/";
}