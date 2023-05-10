import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Goods } from 'src/goods/goods.schema';

@Schema()
export class Artist {
  @Prop()
  name: string;

  @Prop()
  spotifyUrl: string;

  @Prop()
  debutedDate: Date;

  @Prop({type: [{ type: Types.ObjectId, ref: 'Goods' }]})
  goods: Goods[];
}

export type ArtistDocument = Artist & Document;
export const ArtistSchema = SchemaFactory.createForClass(Artist);