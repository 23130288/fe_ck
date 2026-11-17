import users from "../json/usersAccount.json";
import usersInfo from "../json/usersInfo.json";
import defaultAvatar from "../images/placeholder.png";

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

interface RegisteredAccount {
  account: UserAccount;
  info: UserInfo;
}

const REGISTERED_USERS_KEY = "registeredUsers";

function getRegisteredUsers(): RegisteredAccount[] {
  const savedUsers = sessionStorage.getItem(REGISTERED_USERS_KEY);
  return savedUsers ? JSON.parse(savedUsers) as RegisteredAccount[] : [];
}

export function login(email: string, password: string) {
  if (email.trim() === '') {
    throw new Error("Vui lòng nhập email");
  }
  if (password === '') {
    throw new Error("Vui lòng nhập mật khẩu");
  }

  const normalizedEmail = email.trim().toLowerCase();
  const registeredUsers = getRegisteredUsers();
  const registeredUser = registeredUsers.find(
    ({ account }) => account.email === normalizedEmail && account.password === password
  );
  const user = registeredUser?.account ?? (users as UserAccount[]).find(
    u => u.email.toLowerCase() === normalizedEmail && u.password === password
  );

  if (!user) {
    throw new Error("Tài khoản hoặc mật khẩu không đúng");
  }

  const info = registeredUser?.info ?? usersInfo.find(u => u.id === user.id);
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
  const registeredUsers = getRegisteredUsers();
  const emailExists = (users as UserAccount[]).some(
    user => user.email.toLowerCase() === normalizedEmail
  ) || registeredUsers.some(
    ({ account }) => account.email === normalizedEmail
  );
  if (emailExists) {
    throw new Error("Tài khoản đã tồn tại");
  }

  const id = Math.max(
    0,
    ...(users as UserAccount[]).map(user => user.id),
    ...registeredUsers.map(({ account }) => account.id)
  ) + 1;
  const account = { id, email: normalizedEmail, password };
  const info: UserInfo = {
    id,
    username: profile.username.trim(),
    fullName: profile.username.trim(),
    displayName: profile.username.trim(),
    email: normalizedEmail,
    birthDate: profile.birthDate,
    gender: profile.gender,
    phone: "",
    address: "",
    avatar: defaultAvatar
  };
  sessionStorage.setItem(
    REGISTERED_USERS_KEY,
    JSON.stringify([...registeredUsers, { account, info }])
  );

  return {
    success: true,
    UserInfo: info,
    token: "fake-jwt-token"
  };
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userInfo");
  window.location.href = "/";
}