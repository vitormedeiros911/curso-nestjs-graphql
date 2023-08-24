import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Post {
  @Prop()
  @Field()
  id: string;

  @Prop()
  descricao: string;

  @Prop()
  urlImagem: string;

  @Prop()
  likes: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
