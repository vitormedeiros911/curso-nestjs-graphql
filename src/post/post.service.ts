import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async criarPost() {
    const post = new this.postModel({
      id: '1',
      descricao: 'Primeiro post',
      urlImagem: '',
      likes: 0,
    });

    await post.save();
  }
}
