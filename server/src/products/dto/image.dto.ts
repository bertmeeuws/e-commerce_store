import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("image")
export class ImageDto{
    @Field() readonly id?: number;
    @Field() readonly path?: string;
    @Field() readonly productIdId?: number;
}