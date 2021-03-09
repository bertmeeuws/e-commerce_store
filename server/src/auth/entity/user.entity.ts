import { IsEmail, IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 35, unique: true })
  @IsEmail({}, { message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The name is required' })
  email!: string;

  @Column({ type: 'varchar', length: 35 })
  @IsNotEmpty({ message: 'The surname is required' })
  surname!: string;

  @Column({ type: 'varchar', length: 55 })
  @IsNotEmpty({ message: 'The name is required' })
  name!: string;

  @Column()
  @IsNotEmpty({ message: 'The password is required' })
  password!: string;
}
