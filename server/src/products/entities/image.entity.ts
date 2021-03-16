import { ProductEntity } from './product.entity';
import { ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';


@Entity('image')
@ObjectType('image')
export class ImageEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    path!: string;

    @ManyToOne(() => ProductEntity, ProductEntity => ProductEntity.id)
    product_id: ProductEntity;


  
}