import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Goods } from './goods.schema';

@Controller('goods')
export class GoodsController {
    constructor(private readonly goodsService: GoodsService) {}

  @Post()
  async create(@Body() createGoodsDto: Goods): Promise<Goods> {
    return this.goodsService.create(createGoodsDto);
  }

  @Get()
  async findAll(): Promise<Goods[]> {
    return this.goodsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.goodsService.findOne(id);
  }
}
