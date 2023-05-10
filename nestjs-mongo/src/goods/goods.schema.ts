import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Artist } from 'src/artist/artist.schema';

@Schema()
export class Goods {
  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  instock: number;

  @Prop()
  releaseDate: Date;

  @Prop()
  image: string[];

  @Prop({type: [{ type: Types.ObjectId, ref: 'Artist' }]})
  artist: Artist[];
  
}

export type GoodsDocument = Goods & Document;
export const GoodsSchema = SchemaFactory.createForClass(Goods);