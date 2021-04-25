import { UserEntity } from './../auth/entity/user.entity';
import { ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles')
@ObjectType('roles')
export class RolesEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @ManyToMany((type) => UserEntity, (user) => user.roles)
  users: UserEntity[];
}
