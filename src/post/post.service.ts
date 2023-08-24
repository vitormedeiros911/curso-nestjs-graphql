import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostInput } from './input/create-post.input';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async criarPost(createPostInput: CreatePostInput) {
    const post = new this.postModel({
      id: '1',
      descricao: createPostInput.descricao,
      urlImagem: createPostInput.urlImagem,
      likes: 0,
    });

    await post.save();

    return 'Post criado com sucesso!';
  }

  async listarPosts() {
    return this.postModel.find().exec();
  }
}
