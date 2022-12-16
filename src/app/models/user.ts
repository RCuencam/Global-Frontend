export interface UserLoginResponse {
  success: boolean;
  data: User;
  token: string;
  error: string;
}

export interface User {
  name: string;
  email: string;
}