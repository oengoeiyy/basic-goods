import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Goods, GoodsSchema } from './goods.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Goods", schema: GoodsSchema }]),
  ],
  controllers: [GoodsController],
  providers: [GoodsService],
  exports: [GoodsService]
})
export class GoodsModule {}
