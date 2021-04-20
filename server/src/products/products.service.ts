import { CategoryResolver } from './products.resolver';
import { CreateCategory } from './dto/category.dto';
import { CategoryEntity } from './../entities/category.entity';
import { CreateProduct } from './dto/product.dto';
import { ProductEntity } from '../entities/product.entity';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly ProductRepository: Repository<ProductEntity>,
  ) {}

  async getProducts(): Promise<ProductEntity[]> {
    return await this.ProductRepository.find();
  }

  async getProduct(id: string): Promise<ProductEntity> {
    const product = await this.ProductRepository.findOneOrFail({ id });
    console.log(product);
    return product;
  }

  async createProduct(product: CreateProduct): Promise<any> {
    try {
      const record = createQueryBuilder().insert().into(ProductEntity).values({
        title: product.title,
        description: product.description,
        price: product.price,
      });

      console.log(record);

      return record;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}


@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly CategoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(category: CreateCategory): Promise<CategoryEntity> {
    let entity = new CategoryEntity();
    entity.name = category.name;
    entity.description = category.description;

    return await this.CategoryRepository.save(category);
  }
}
