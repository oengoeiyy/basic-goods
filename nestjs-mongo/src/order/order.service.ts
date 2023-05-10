import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

    async create(order: Order): Promise<Order> {
      const createdOrder = new this.orderModel(order);
      return createdOrder.save();
    }
  
    async findAll(): Promise<Order[]> {
      return this.orderModel.find().populate({ path: 'goods', model: 'Goods' }).exec();
    }
  
    async findOne(id: string) {
      //const goods = await this.goodsModel.findById(id).populate('artist').lean().exec();
      
      return this.orderModel.findById(id).populate({ path: 'goods', model: 'Goods' }).lean().exec();
    }
}
