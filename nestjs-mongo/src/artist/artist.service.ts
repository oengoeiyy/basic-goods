import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist, ArtistDocument } from './artist.schema';
import { Goods } from 'src/goods/goods.schema';

@Injectable()
export class ArtistService {
    constructor(@InjectModel('Artist') private artistModel: Model<Artist>,
    ) {}

  async create(artist: Artist): Promise<Artist> {
    const createdArtist = new this.artistModel(artist);
    return createdArtist.save();
  }

  async createArtist(name: string, spotify: string, debuted: Date, goods: Goods[]): Promise<Artist> {
    return this.artistModel.create({
        name,
        spotify,
        debuted,
        goods
    });
}

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().exec();
  }

  async findOne(id: string) {
    //const artist = await this.artistModel.findById(id).lean().exec();
    
    return this.artistModel.findById(id).lean().exec();
  }

  async findOneByName(name: string): Promise<ArtistDocument> {
    return this.artistModel.findOne({ name }).populate('goods');
  }

}
