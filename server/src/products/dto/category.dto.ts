import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType("category")
export class CategoryDto{
    @Field() readonly id?: number;
    @Field() readonly name?: string;
    @Field() readonly description?: string;
    

}