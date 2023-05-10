import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.schema';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async create(@Body() createOrderDto: Order): Promise<Order> {
      return this.orderService.create(createOrderDto);
    }
  
    @Get()
    async findAll(): Promise<Order[]> {
      return this.orderService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.orderService.findOne(id);
    }
}
