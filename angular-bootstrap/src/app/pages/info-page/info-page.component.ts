import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Goods } from 'src/app/models/goods.model';
import { ActivatedRoute } from "@angular/router";
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent {

  goods!: Goods;
  goodsId : any;

  constructor(private http:HttpClient,private route: ActivatedRoute){
    this.goodsId = this.route.snapshot.queryParamMap.get('goods');
    console.log(this.goodsId)
    this.http.get<Goods>('/api/goods/'+this.goodsId).subscribe((res) => {
      this.goods = res;
    console.log(res)
    })
  }
  
}
