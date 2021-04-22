import { CreateToken } from './../interface/jwt.interface';
import { UserEntity } from './../entity/user.entity';
import { sign } from 'jsonwebtoken';
import SECRET from '../constants/secret';

export const createTokens = (user_id: number): CreateToken => {
  const refreshToken = sign({ userId: user_id }, SECRET.refreshToken, {
    expiresIn: '7d',
  });
  const accessToken = sign({ userId: user_id }, SECRET.accessToken, {
    expiresIn: '15min',
  });

  return { refreshToken, accessToken };
};
