import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  descricao: string;

  @Field()
  urlImagem: string;
}
