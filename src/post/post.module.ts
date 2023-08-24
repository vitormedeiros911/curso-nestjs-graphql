import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { PostSchema } from './schema/post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  providers: [PostService, PostResolver],
})
export class PostModule {}
