import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Post {
  @Prop()
  @Field()
  id: string;

  @Prop()
  @Field()
  descricao: string;

  @Prop()
  @Field()
  urlImagem: string;

  @Prop()
  @Field()
  likes: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
