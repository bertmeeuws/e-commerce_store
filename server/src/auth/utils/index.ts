import { UserEntity } from './../entity/user.entity';
import { sign } from 'jsonwebtoken';

export const createTokens = (user: UserEntity) => {
  const refreshToken = sign(
    { userId: user.id },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: '7d',
    },
  );
  const accessToken = sign(
    { userId: user.id },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '15min',
    },
  );

  return { refreshToken, accessToken };
};
