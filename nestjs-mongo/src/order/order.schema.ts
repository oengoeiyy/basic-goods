import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Timestamp } from 'bson';
import { Document, Types } from 'mongoose';
import { Goods } from 'src/goods/goods.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order extends Document {

    @Prop({type: [{ type: Types.ObjectId, ref: 'Goods' }]})
    goods: Goods[];

    @Prop()
    timestamp: Timestamp;
  
}

export const OrderSchema = SchemaFactory.createForClass(Order);