import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { User } from './user.schema';
import { Order } from 'src/order/order.schema';
import { Goods } from 'src/goods/goods.schema';

@Controller('auth')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/signup')
    async createUser(
        @Body('password') password: string,
        @Body('username') username: string,
    ): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const result = await this.userService.createUser(
            username,
            hashedPassword,
            [],[],
        );
        return result;
    }
}