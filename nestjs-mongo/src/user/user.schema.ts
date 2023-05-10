import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Goods } from 'src/goods/goods.schema';
import { Order } from 'src/order/order.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({type: [{ type: Types.ObjectId, ref: 'Order' }]})
  order: Order[];

  @Prop({type: [{ type: Types.ObjectId, ref: 'Goods' }]})
  waitinglist: Goods[];

}

export const UserSchema = SchemaFactory.createForClass(User);