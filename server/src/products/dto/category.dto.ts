import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';

@ObjectType()
export class CategoryDto {
  @Field() readonly id?: number;
  @Field() readonly name?: string;
  @Field() readonly description?: string;
}

@InputType()
export class CreateCategory extends OmitType(CategoryDto, ['id'], InputType) {}
