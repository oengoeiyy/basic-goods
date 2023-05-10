import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductModel } from 'src/models/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){

    }
    @Get()
    getProducts(@Query('name') name ?: string): ProductModel[]{
        if(name){
            return this.productService
            .getProductsByName((product) => product.name.includes(name));
        } else {
            return this.productService.getProducts();
        }
        
    }

    @Get(':id')
    getProductsById(@Param('id') id: string){
        return this.productService.getProductsById(Number(id));
    }
}
