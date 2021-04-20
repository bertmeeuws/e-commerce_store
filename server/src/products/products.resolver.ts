import { CategoryEntity } from './../entities/category.entity';
import { CategoryDto, CreateCategory } from './dto/category.dto';
import { ProductEntity } from './../entities/product.entity';
import { Product, CreateProduct } from './dto/product.dto';
import { ProductsService, CategoryService } from './products.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product])
  async getProducts(): Promise<ProductEntity[]> {
    return this.productsService.getProducts();
  }

  @Query(() => Product)
  async getProduct(@Args('id') id: string): Promise<ProductEntity> {
    return this.productsService.getProduct(id);
  }

  @Mutation(() => Product)
  async createProduct(@Args('CreateProducts') product: CreateProduct) {
    return this.productsService.createProduct(product);
  }
}

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => CategoryDto)
  async createCategory(@Args('CreateCategory') category: CreateCategory) {
    return this.categoryService.createCategory(category);
  }
}
