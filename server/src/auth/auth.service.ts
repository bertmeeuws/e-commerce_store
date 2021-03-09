import { createTokens } from './utils/index';
import { createUserInput } from './dto/create-user.input';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { loginUserInput } from './dto/login-user.input';

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
    const uniqueEmail = await this.UserRepository.findOneOrFail({
      where: { email: data.email },
    });

    if (uniqueEmail) {
      throw new BadRequestException('Email already exists');
    }

    //encrypting and storing
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await this.UserRepository.create({
      email: data.email,
      surname: data.surname,
      name: data.name,
      password: hashedPassword,
    }).save();
  }

  async login(data: loginUserInput) {
    const user = await this.UserRepository.findOneOrFail({
      where: { email: data.email },
    });

    //email does not exist
    if (!user) {
      throw new BadRequestException('Information incorrect');
    }
    //comparing pass
    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) {
      throw new BadRequestException('Information incorrect');
    }
    //correct? create tokens and send back in cookie
    const { accessToken, refreshToken } = createTokens(user);

    return true;
  }
}
