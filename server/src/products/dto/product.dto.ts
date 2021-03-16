import { CategoryDto } from './category.dto';
import { ImageDto } from './image.dto';
import { Field, InputType, ObjectType } from "@nestjs/graphql";


@ObjectType("product")
@InputType("ProductDto")
export class ProductDto{
    @Field() readonly id?: number;
    @Field() readonly title?: string;
    @Field() readonly description?: string;
    @Field() readonly categories?: any;

    @Field() readonly photos?: any;
    @Field() readonly price?: number;

    @Field() readonly S?: number;
    @Field() readonly M?: number;
    @Field() readonly L?: number;
    @Field() readonly XL?: number;

}