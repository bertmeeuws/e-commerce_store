import { ProductDto } from './dto/product.dto';
import { ProductEntity } from './entities/product.entity';
import { ProductsService } from './products.service';
import { Resolver, Query } from '@nestjs/graphql';


@Resolver()
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService){}


    @Query(() => [ProductDto])
    async getProducts(): Promise<ProductEntity[]>{

        return this.productsService.getProducts()

    }






}

