import {Component, OnInit} from "@angular/core";
// we don't need to register this because it is part of the RouterModule added to the imports array
import { ActivatedRoute, Router } from "@angular/router"; 

import {IProduct} from "./product";
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle: string = "Product Detail";
    product: IProduct;  
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService){
    }

    ngOnInit(): void{
        let id = +this._route.snapshot.params['id']; // the + is the javascript shorthand to convert the string to a numeric id
        this.pageTitle += `: ${id}`;

        this._productService.getProduct(id)
            .subscribe(product => this.product = <IProduct>product,
                        error => this.errorMessage = <any>error)
        console.log(this.product);
    }
    

    onBack(): void{
        this._router.navigate(['/products']);
    }
}