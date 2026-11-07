import users from "../json/users.json";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
}
export async function login(email: string, password: string) {
  // Simulate API response delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = (users as User[]).find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Don't return the password
  const { password: _, ...userInfo } = user;

  return {
    success: true,
    user: userInfo,
    token: "fake-jwt-token"
  };
}