import { CreateUser, JwtFromRequest } from './interface/jwt.interface';
import { RolesEntity } from './../entities/roles.entity';
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
import { Context } from 'node:vm';
import SECRET from './constants/secret';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,

    @InjectRepository(RolesEntity)
    private readonly RolesRepository: Repository<RolesEntity>,
  ) {}

  async showAll(): Promise<UserEntity[]> {
    return await this.UserRepository.find({
      relations: ['roles', 'roles.users'],
    });
  }

  async registerUser(data: createUserInput): Promise<CreateUser> {
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

    if (!user) {
      throw new BadRequestException();
    }

    const { id, count } = user;
    return { id, count };
  }

  async addRolesToUser(user_id: number, roles: string[]): Promise<string[]> {
    if (!roles) {
      console.log('No roles found, skipping');
      return [];
    }

    if (!user_id) {
      throw new BadRequestException('No user_id given');
    }
    if (!roles) {
      throw new BadRequestException('No roles to assign');
    }

    const user = await this.UserRepository.findOne({
      where: { id: user_id },
    });

    if (!user) {
      throw new BadRequestException('No user found during adding roles');
    }

    roles.forEach(async (role) => {
      try {
        const role1 = new RolesEntity();
        role1.title = role;

        console.log(role1);

        await this.RolesRepository.save(role1);

        const user = await this.UserRepository.findOne({
          where: { id: user_id },
        });

        user.roles = [role1];

        await this.UserRepository.save(user);
      } catch (e) {
        console.log(e);
      }
    });

    console.log('Roles injected');

    const updatedUser = await this.UserRepository.findOne({
      where: { id: user_id },
    });

    console.log(updatedUser.roles);

    //let currentRoles = updatedRoles.map(({ title }) => title);

    //console.log('Curent roles: ' + currentRoles);

    return [];
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
    const { accessToken, refreshToken } = createTokens(user.id);

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
      //refresh isn't the same and count isn't either. User needs new to login again. Did a password reset before
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

  async checkUserRoles(ctx: Context, token: string, ...roles: string[]) {
    const decodedCookie = jwt.verify(token, SECRET.mainToken) as JwtFromRequest;

    if (!decodedCookie) {
      throw new UnauthorizedException();
    }

    const id = decodedCookie.user_id;
    const user = await this.getUserById(id);

    //Make sure roles gets pulled as well

    console.log(user);

    return roles.some((role) => roles.includes(role));
  }
}
