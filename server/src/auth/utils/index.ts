import { UserEntity } from './../entity/user.entity';
import { sign } from 'jsonwebtoken';

export const createTokens = (user: UserEntity) => {
  const refreshToken = sign({ userId: user.id }, 'fzefjfosfoizefhjeigjeziogj', {
    expiresIn: '7d',
  });
  const accessToken = sign({ userId: user.id }, 'fzefjfosfoizefhjeigjeziogj', {
    expiresIn: '15min',
  });

  console.log(refreshToken, accessToken);

  return { refreshToken, accessToken };
};
