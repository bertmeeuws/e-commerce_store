import { createTokens } from './utils/index';
import { createUserInput } from './dto/create-user.input';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { loginUserInput } from './dto/login-user.input';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}

  async showAll(): Promise<UserEntity[]> {
    return await this.UserRepository.find();
  }

  async registerUser(data: createUserInput): Promise<any> {
    //Return jwt

    //check if email already exists
    const uniqueEmail = await this.UserRepository.findOne({
      where: { email: data.email },
    });

    if (uniqueEmail) {
      throw new BadRequestException('Email already exists');
    }

    //encrypting and storing
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.UserRepository.create({
      email: data.email,
      surname: data.surname,
      name: data.name,
      password: hashedPassword,
    }).save();

    const { id, count } = user;

    const { accessToken, refreshToken } = createTokens(user);
    return { accessToken, refreshToken, id, count };
  }

  async login(data: loginUserInput) {
    const user = await this.UserRepository.findOne({
      where: { email: data.email },
    });

    //email does not exist
    if (!user) {
      throw new BadRequestException('Information incorrect');
    }

    const { id, count } = user;
    //comparing pass
    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) {
      throw new BadRequestException('Information incorrect');
    }
    //correct? create tokens and send back in cookie
    const { accessToken, refreshToken } = createTokens(user);

    return { accessToken, refreshToken, id, count };
  }

  async getUserById(id: number): Promise<UserEntity | Boolean> {
    if (!id) {
      return false;
    }

    const user = await this.UserRepository.findOne({
      where: { id: id },
    });

    return user;
  }

  checkIfCountAligns = async (user_id: number, count: number) => {
    if (!user_id) {
      return false;
    }
    const user = await this.UserRepository.findOne({
      where: { id: user_id },
    });

    if (!user || user.count !== count) {
      //refresh isn't the same and count isn't either. User needs new creds
      return false;
    }
    return true;
  };

  getTokenFromRequestAuthHeader(request: any): string {
    const authHeader = request?.headers?.authorization as string;
    if (!authHeader) {
      throw new BadRequestException('Authorization header not found.');
    }

    //     Bearer  ey.xxxxxxx
    const [scheme, credentials] = authHeader.split(' ');
    if (scheme !== 'Bearer') {
      throw new BadRequestException(
        `Authentication type \'Bearer\' required. Found \'${scheme}\'`,
      );
    }

    return credentials;
  }

  verifyJwt(token: string): any {
    try {
      return jwt.verify(token, this.parseJWTSecret().key);
    } catch (err) {
      throw new UnauthorizedException('Token not valid');
    }
  }

  parseJWTSecret() {
    return JSON.parse('fzefjfosfoizefhjeigjeziogj') as {
      type: 'HS256' | 'RS512';
      key: string;
    };
  }

  checkUserRoles(user: any, ...roles: string[]) {
    const claims = user['https://hasura.io/jwt/claims'];
    const allowedRoles = claims['x-hasura-allowed-roles'];
    return allowedRoles.some((role) => roles.includes(role));
  }
}
