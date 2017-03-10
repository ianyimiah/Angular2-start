import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// to use Observables, angular uses a third party library called Reactive Extensions(RxJS)
// observables support operators from this library(RxJS).
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {IProduct} from './product';

// This decorator is optional unless the service has an injected dependency on its own. However, it is good pratice to add it to every service.
@Injectable() 
export class ProductService{
    private _productUrl: string = 'api/products/products.json';

    // this is an injected dependency
    constructor(private _http: Http) { }


    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct>{
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    } 

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}


// observables allow us to manipulate sets of events with operators.
// Operators are methods on observables that compose new observables.
// Each operator transforms the source observable in some way
// Operators donot wait for all the values and process them at once
// Rather, operators on observables process each value as it is emitted.
// map, filter, take, merge, do, catch

/*
It is important to note that http calls are single async operators, meaning that 
an observable sequence contains one element which is the http response object. 

So it is imperative to also import Response from @angular/http
 */