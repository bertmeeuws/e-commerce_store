import { ProductEntity } from './product.entity';
import { ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'image' })
@ObjectType('image')
export class ImageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  path!: string;

  @ManyToOne(() => ProductEntity, (product: ProductEntity) => product.images)
  @JoinColumn({ name: 'user_id' })
  product: ProductEntity;
}
