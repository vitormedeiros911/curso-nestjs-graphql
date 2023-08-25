import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePostInput } from './input/create-post.input';
import { Post } from './schema/post.schema';
import { v4 } from 'uuid';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async criarPost(createPostInput: CreatePostInput) {
    const post = new this.postModel({
      id: v4(),
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

  async editarPost(id: string, createPostInput: CreatePostInput) {
    const post = await this.buscarPost(id);

    post.descricao = createPostInput.descricao;
    post.urlImagem = createPostInput.urlImagem;

    return await post.save();
  }

  async excluirPost(id: string) {
    await this.buscarPost(id);

    await this.postModel.deleteOne({ id }).exec();

    return 'Post excluído com sucesso!';
  }

  async darLike(id: string) {
    const post = await this.buscarPost(id);

    post.likes = post.likes + 1;

    return post.save();
  }

  async removerLike(id: string) {
    const post = await this.buscarPost(id);

    post.likes = post.likes - 1;

    return post.save();
  }

  async buscarPost(id: string) {
    const post = await this.postModel.findOne({ id }).exec();

    if (!post) {
      throw new NotFoundException('Post não encontrado!');
    }

    return post;
  }
}
