export interface JwtFromRequest {
  accessToken: string;
  refreshToken: string;
  user_id: number;
  count: number;
}

export interface CreateToken {
  accessToken: string;
  refreshToken: string;
}

export interface CreateUser {
  id: number;
  count: number;
}
