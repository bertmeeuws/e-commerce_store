import { ProductEntity } from './entities/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly ProductRepository: Repository<ProductEntity>
    ){}

    async getProducts(): Promise<ProductEntity[]>{
        return await this.ProductRepository.find();
    }






}
