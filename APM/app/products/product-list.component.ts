import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    // selector: 'pm-products',     Not needed since we are no longer nesting this component
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = ""
    errorMessage: string;
    products: IProduct[];

    constructor( private _productService: ProductService){}

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        // this.products = this._productService.getProduct();
        // this is not used because the product service now returns an observable

        // this is only possible because the ProductService method getProduct() now returns an observable
        this._productService.getProducts().
            subscribe(products => this.products = products,
                      error => this.errorMessage = <any>error);  
        
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: ' + message;
    }
}

/*
The subscribe method of observables
x.subscribe(valueFunction, errorFunction)
The valueFunction is called for each value that the observable emits

x.subscribe(valueFunction, errorFunction, completionFunction)
when you want to know when the observable complete. completionFunction is executed
on completion


with dependency injection, an angular injector provides an instance of a service registered with the angular injector (via a component or angular module)
rather than creating the instance locally.
 */
