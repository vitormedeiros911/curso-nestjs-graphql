import { Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => String)
  getHello() {
    return 'Hello World!';
  }

  criarPost() {
    return this.postService.criarPost();
  }
}
