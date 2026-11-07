import users from "../json/usersAccount.json";
import usersInfo from "../json/usersInfo.json";

interface UserAccount {
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