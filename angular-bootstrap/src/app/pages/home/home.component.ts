import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Goods } from 'src/app/models/goods.model';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // imageArray = ['62', '83', '466', '965', '982', '1043', '738'].map((n) => `https://picsum.photos/id/${n}/1600/500`);
  product : Product[] = [];
  goods : Goods[] = [];
  // imageArray :any;
  imageArray = [
    {
      "url" : 'https://i0.wp.com/www.korseries.com/wp-content/uploads/2017/10/snsd-1.jpg',
      "caption" : "Girls' Generation"
    },
    {
      "url" :  'https://images.workpointnews.com/workpointnews/2022/03/22094516/1647917114_34094_web33.jpg',
      "caption" : "Red Velvet"
    },
    {
      "url" : 'https://images.workpointnews.com/workpointnews/2022/06/10001226/1654794744_52479_2222222222222222222222.jpg',
      "caption" : "aespa"
    }  
  ]

  constructor(private http:HttpClient){
    this.http.get<Goods[]>('/api/goods').subscribe((res) => {
      this.goods = res;
    })

    // this.http.get<Product[]>('/api/product').subscribe((res) => {
    //   this.product = res;
    //   this.imageArray = this.product.map(product => product.cover);
    //   console.log(this.imageArray)
    // })
  }

}
