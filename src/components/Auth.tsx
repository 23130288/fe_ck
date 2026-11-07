import users from "../json/users.json";

interface User {
  id: number;
  email: string;
  password: string;
}
export async function login(email: string, password: string) {
  if (email == '') {
    throw new Error("Vui lòng nhập email");
  }
  if (password == '') {
    throw new Error("Vui lòng nhập mật khẩu");
  }

  const user = (users as User[]).find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Tài khoản hoặc mật khẩu không đúng");
  }

  const { password: _, ...accountInfo } = user;

  return {
    success: true,
    user: accountInfo,
    token: "fake-jwt-token"
  };
}