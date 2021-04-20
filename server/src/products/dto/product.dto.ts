import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field() readonly id: string;
  @Field() readonly title: string;
  @Field() readonly description: string;
  @Field() readonly categories?: number;

  //@Field() readonly photos?: ImageDto;
  @Field() readonly price?: number;

  @Field({ defaultValue: 100 }) readonly S?: number;
  @Field({ defaultValue: 100 }) readonly M?: number;
  @Field({ defaultValue: 100 }) readonly L?: number;
  @Field({ defaultValue: 100 }) readonly XL?: number;
}

@InputType()
export class CreateProduct extends OmitType(
  Product,
  ['id', 'S', 'M', 'L', 'XL'],
  InputType,
) {}
