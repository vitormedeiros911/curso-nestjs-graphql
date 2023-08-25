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

  @Mutation(() => Post)
  async editarPost(
    @Args('id') id: string,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ) {
    return this.postService.editarPost(id, createPostInput);
  }

  @Mutation(() => String)
  async excluirPost(@Args('id') id: string) {
    return this.postService.excluirPost(id);
  }

  @Mutation(() => Post)
  async darLike(@Args('id') id: string) {
    return this.postService.darLike(id);
  }

  @Mutation(() => Post)
  async removerLike(@Args('id') id: string) {
    return this.postService.removerLike(id);
  }
}
