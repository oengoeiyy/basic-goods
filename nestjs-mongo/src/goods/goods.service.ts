import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Goods } from './goods.schema';
import { FlattenMaps, Model, ObjectId } from 'mongoose';

@Injectable()
export class GoodsService {
    constructor(@InjectModel('Goods') private goodsModel: Model<Goods>) {}

  async create(goods: Goods): Promise<Goods> {
    const createdGoods = new this.goodsModel(goods);
    return createdGoods.save();
  }

  async findAll(): Promise<Goods[]> {
    return this.goodsModel.find().populate({ path: 'artist', model: 'Artist' }).exec();
  }

  async findOne(id: string) {
    //const goods = await this.goodsModel.findById(id).populate('artist').lean().exec();
    
    return this.goodsModel.findById(id).populate({ path: 'artist', model: 'Artist' }).lean().exec();
    // {
    //   name: goods.name,
    //   price: goods.price,
    //   cover: goods.cover,
    //   artistName: goods.artist.name, // Access the artist's name
    //   artistSpotify: goods.artist.spotify, // Access the artist's Spotify URL
    // };
  }
  
}
