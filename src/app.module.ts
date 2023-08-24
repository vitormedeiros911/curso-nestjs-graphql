import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://graphql:graphql@cluster0.avi1z.mongodb.net/graphql',
    ),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    PostModule,
  ],
})
export class AppModule {}
