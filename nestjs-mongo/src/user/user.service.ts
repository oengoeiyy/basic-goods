import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { Order } from 'src/order/order.schema';
import { Goods } from 'src/goods/goods.schema';


@Injectable()
export class UserService {
    constructor(@InjectModel('user') private userModel: Model<UserDocument>) { }
    async createUser(username: string, password: string, order: Order[], waitinglist: Goods[]): Promise<User> {
        return this.userModel.create({
            username,
            password,
            order,
            waitinglist
        });
    }
    async getUser(query: object ): Promise<User> {
        return this.userModel.findOne(query);
    }

    async count(): Promise<number> {
        return this.userModel.countDocuments().exec();
      }
    
}