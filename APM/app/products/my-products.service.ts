import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';


@Injectable()
export class MyProductService {
    private _fireUrlRoot: string = 'https://example-3acea.firebaseio.com/'
    products: IProduct[]

    constructor(private _http: Http) {}

    getProducts(){
        return this._http.get(this._fireUrlRoot + 'Products.json')
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log(JSON.stringify(data)));
    }
}

