import { Component } from '@angular/core';

import { MyProductService } from './my-products.service';

import { IProduct } from './product';

@Component({
    selector: 'my-products',
    templateUrl: '/app/products/my-products.component.html'
})
export class MyProductsComponent{
    products: IProduct[];

    constructor(private _myProductService: MyProductService) {
        this.getProducts();
    }

    getProducts(){
        this._myProductService.getProducts().subscribe(
            products => this.products = products
        );
    }
}