import { ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';


@Entity('category')
@ObjectType('category')
export class CategoryEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({nullable: true, unique: true})
    @IsOptional()
    description?: string;
  
}