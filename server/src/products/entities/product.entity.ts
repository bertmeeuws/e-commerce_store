import { ImageEntity } from './image.entity';
import { CategoryEntity } from './category.entity';
import { ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty } from 'class-validator';



@Entity('product')
@ObjectType('product')
export class ProductEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({nullable: true})
    description?: string;

    @ManyToMany(() => CategoryEntity)
    @JoinTable()
    categories: CategoryEntity[]

    @OneToMany(() => ImageEntity, ImageEntity => ImageEntity.product_id)
    photos: ImageEntity[];

    @Column({type: "float", nullable: false, default: 56.00})
    price!: number 

   
    @Column({default: 100})
    S!: number

    @Column({default: 100})
    M!: number

    @Column({default: 100})
    L!: number

    @Column({default: 100})
    XL!: number




}