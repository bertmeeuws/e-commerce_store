export interface JwtFromRequest {
  accesstoken: string;
  refreshtoken: string;
  user_id: number;
  count: number;
  iat: number;
}
