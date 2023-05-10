import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Artist, ArtistSchema } from './artist.schema';
import { GoodsModule } from 'src/goods/goods.module';
import { Goods, GoodsSchema } from 'src/goods/goods.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: "Artist", schema: ArtistSchema }, { name: 'Goods', schema: GoodsSchema }])],
  controllers: [ArtistController],
  providers: [ArtistService],
  exports: [ArtistService]
})
export class ArtistModule {}
