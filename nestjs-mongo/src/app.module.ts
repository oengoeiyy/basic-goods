import { Injectable, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from './artist/artist.module';
import { GoodsModule } from './goods/goods.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { OrderService } from './order/order.service';
import { ArtistService } from './artist/artist.service';
import { GoodsService } from './goods/goods.service';
import { UserModule } from './user/user.module';
import * as bcrypt from 'bcrypt';
import { Artist, ArtistDocument, ArtistSchema } from './artist/artist.schema';
import { Goods, GoodsDocument, GoodsSchema } from './goods/goods.schema';
import { Model } from 'mongoose';


@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/basic-goods'),
    ArtistModule,
    GoodsModule,
    OrderModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule implements OnModuleInit {
  constructor(
    private readonly userService: UserService,
    private readonly orderService: OrderService,
    private readonly artistService: ArtistService,
    private readonly goodsService: GoodsService,
    ) { }

  async onModuleInit() {
    const userCount = await this.userService.count();
    if (userCount === 0) {

      const saltOrRounds = 10;
      const hashedPassword = await bcrypt.hash('1234', saltOrRounds);
      const user1 = await this.userService.createUser('user0@mail.com', hashedPassword, [], []);
      
      this.initData();

    }
  }

  async initData() {
    const aespa = new Artist();
      aespa.name = 'aespa'; aespa.spotifyUrl = 'https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE'; 
      aespa.debutedDate = new Date(2020, 11, 17); aespa.goods = [];
      const aespaData = await this.artistService.create(aespa);

      const rv = new Artist();
      rv.name = 'Red Velvet'; rv.spotifyUrl = 'https://open.spotify.com/artist/1z4g3DjTBBZKhvAroFlhOM'; 
      rv.debutedDate = new Date(2014, 8, 1); rv.goods = [];
      const rvData = await this.artistService.create(rv);

      const sss = new Artist();
      sss.name = 'tripleS'; sss.spotifyUrl = 'https://open.spotify.com/artist/5Z71xE9prhpHrqL5thVMyK'; 
      sss.debutedDate = new Date(2023, 2, 13); sss.goods = [];
      const sssData = await this.artistService.create(sss);

      const gg = new Artist();
      gg.name = 'Girls\' Generation'; gg.spotifyUrl = 'https://open.spotify.com/artist/0Sadg1vgvaPqGTOjxu0N6c'; 
      gg.debutedDate = new Date(2007, 8, 5); gg.goods = [];
      const ggData = await this.artistService.create(gg);

      const gd1 = new Goods();
      gd1.title = 'FOREVER 1 - The 7th Album'; gd1.instock = 20; gd1.price = 599; 
      gd1.releaseDate = new Date(2022, 8, 5); gd1.artist = [ggData];
      gd1.image = ['https://i.scdn.co/image/ab67616d0000b273aea29200523b1ee4d5b2c035','https://cf.shopee.co.th/file/41b0e1291557e174252d7d55c4c9fa61','https://l.lnwfile.com/_/l/_raw/8w/fs/gm.jpg'];
      const gd1c = await this.goodsService.create(gd1)

      const gd2 = new Goods();
      gd2.title = 'Girls - The 2nd Mini Album'; gd2.instock = 40; gd2.price = 499; 
      gd2.releaseDate = new Date(2022, 7, 8); gd2.artist = [aespaData];
      gd2.image = ['https://i.scdn.co/image/ab67616d0000b273b3be3b970fc89a02f301c9da','https://my-live-01.slatic.net/p/dc1ac4e6f99f7e482f3d6798e5b59705.jpg','https://my-test-11.slatic.net/p/e7d66ae1f58fe9a27237c73baf147f49.jpg']
      const gd2c = await this.goodsService.create(gd2)

      const gd3 = new Goods();
      gd3.title = '2022 Winter SMTOWN : SMCU PALACE'; gd3.instock = 50; gd3.price = 899; 
      gd3.releaseDate = new Date(2022, 12, 26); gd3.artist = [ggData,aespaData,rvData];
      gd3.image = ['https://i.scdn.co/image/ab67616d0000b273f184dfda8eaeac06fff5e14e','https://cdn.shopify.com/s/files/1/0589/0844/2805/products/smtown-album-smtown-2022-winter-smtown-smcu-palace-portrait-book-ver-34850382938293.jpg?v=1672126535']
      const gd3c = await this.goodsService.create(gd3)

      const gd4 = new Goods();
      gd4.title = 'The ReVe Festival 2022 - Feel My Rhythm'; gd4.instock = 40; gd4.price = 699; 
      gd4.releaseDate = new Date(2022, 3, 21); gd4.artist = [rvData];
      gd4.image = ['https://i.scdn.co/image/ab67616d0000b2738c4a282e84a53c1c8acf129a','https://laz-img-sg.alicdn.com/p/b700a727bee03c524695ea314f476c68.jpg','https://f.ptcdn.info/679/076/000/r8til01880Yn2N4MYrDg-o.jpg']
      const gd4c = await this.goodsService.create(gd4)

      const gd5 = new Goods();
      gd5.title = '+(KR)ystal Eyes <AESTHETIC>'; gd5.instock = 50; gd5.price = 399; 
      gd5.releaseDate = new Date(2023, 5, 4); gd5.artist = [sssData];
      gd5.image = ['https://i.scdn.co/image/ab67616d0000b2739363ff9f72f9912b41b860aa','https://64.media.tumblr.com/7a7a1ece5a7b2962b027a87125ff98a1/b9eaa64ddb6ce3c3-1c/s1280x1920/065c5864d6f6ec0d1576360adbbb1c082720f4a5.png','https://www.kyyo.co.uk/cdn/shop/products/chrome_sPbSe8mAvA.png?v=1682331354']
      const gd5c = await this.goodsService.create(gd5)

      const gd6 = new Goods();
      gd6.title = 'Acid Angel from Asia <ACCESS>'; gd6.instock = 50; gd6.price = 399; 
      gd6.releaseDate = new Date(2022, 10, 28); gd6.artist = [sssData];
      gd6.image = ['https://i.scdn.co/image/ab67616d0000b2731be910fd8122cd805d651a8d','https://cdn.shopify.com/s/files/1/2420/2037/products/tripleS-AcidAngelfromAsia_Access_VERSIONA.jpg?v=1676508846','https://m.media-amazon.com/images/I/514XfOTa72L._AC_UF894,1000_QL80_.jpg']
      const gd6c = await this.goodsService.create(gd6)


      const aespaDoc: ArtistDocument = await this.artistService.findOneByName('aespa');
      aespaDoc.goods.push(gd2c, gd3c);
      await aespaDoc.save();

      const rvvDoc: ArtistDocument = await this.artistService.findOneByName('Red Velvet');
      rvvDoc.goods.push(gd3c, gd4c);
      await rvvDoc.save();

      const ggDoc: ArtistDocument = await this.artistService.findOneByName('Girls\' Generation');
      ggDoc.goods.push(gd1c, gd3c);
      await ggDoc.save();

      const sssDoc: ArtistDocument = await this.artistService.findOneByName('tripleS');
      sssDoc.goods.push(gd5c, gd6c);
      await sssDoc.save();


  }

}
