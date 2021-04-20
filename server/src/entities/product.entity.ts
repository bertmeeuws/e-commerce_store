import { ImageEntity } from './image.entity';
import { CategoryEntity } from './category.entity';
import { ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { IsOptional } from 'class-validator';

@Entity({ name: 'product' })
@ObjectType('product')
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index({ unique: true })
  title!: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => CategoryEntity)
  @JoinTable()
  @IsOptional()
  categories: CategoryEntity[];

  @OneToMany(() => ImageEntity, (image: ImageEntity) => image.product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @IsOptional()
  images: Array<ImageEntity>;

  @Column({ type: 'float', nullable: false, default: 56.0 })
  price!: number;

  @Column({ default: 100 })
  S!: number;

  @Column({ default: 100 })
  M!: number;

  @Column({ default: 100 })
  L!: number;

  @Column({ default: 100 })
  XL!: number;
}
