import { CategoryEntity } from './../entities/category.entity';

import { ProductEntity } from '../entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsResolver, CategoryResolver } from './products.resolver';
import { ProductsService, CategoryService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    TypeOrmModule.forFeature([CategoryEntity]),
  ],
  providers: [
    ProductsResolver,
    ProductsService,
    CategoryResolver,
    CategoryService,
  ],
})
export class ProductsModule {}
