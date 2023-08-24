import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostInput } from './input/create-post.input';
import { Post } from './schema/post.schema';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => String)
  getHello() {
    return 'Hello World!';
  }

  @Mutation(() => String)
  async criarPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.criarPost(createPostInput);
  }

  @Query(() => [Post])
  async listarPosts() {
    return this.postService.listarPosts();
  }
}
