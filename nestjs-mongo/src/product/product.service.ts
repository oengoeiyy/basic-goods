import { Injectable } from '@nestjs/common';
import { ProductModel } from 'src/models/product.dto';

@Injectable()
export class ProductService {
    private products: ProductModel[] = [
        {id: 1, name: 'AESTHETIC', price: 599, cover: 'https://i.scdn.co/image/ab67616d0000b2739363ff9f72f9912b41b860aa'},
            {id: 2, name: 'UNFORGIVEN', price: 699, cover: 'https://pbs.twimg.com/media/FtyuHoxacAEzHEC.jpg'},
            {id: 3, name: 'PERFUME', price: 499, cover: 'https://musicnook.co/wp-content/uploads/2023/04/perfume-nct-dojaejung-%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%B5.jpg'},
            {id: 4, name: 'I\'ve IVE', price: 899, cover: 'https://i.scdn.co/image/ab67616d0000b27325ef3cec1eceefd4db2f91c8'}
    ];

    getProducts(): ProductModel[]{
        return this.products
    }
    
    getProductsById(id: number){
        return this.products.find(p=>p.id===id);
    }

    getProductsByName(predicate: (product: ProductModel)=>boolean){
        return this.products.filter(p=>predicate(p));
    }
}
