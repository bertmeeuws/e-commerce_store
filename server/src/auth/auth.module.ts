import { UserEntity } from './entity/user.entity';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesEntity } from 'src/entities/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RolesEntity])],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
