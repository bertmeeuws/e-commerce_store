import { UserEntity } from './../entity/user.entity';
import { sign } from 'jsonwebtoken';

export const createTokens = (user: any) => {
  const refreshToken = sign({ userId: user.id }, 'fzefjfosfoizefhjeigjeziogj', {
    expiresIn: '7d',
  });
  const accessToken = sign({ userId: user.id }, 'fzefjfosfoizefhjeigjeziogj', {
    expiresIn: '15min',
  });

  return { refreshToken, accessToken };
};
