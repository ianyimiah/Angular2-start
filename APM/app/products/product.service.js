"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// to use Observables, angular uses a third party library called Reactive Extensions(RxJS)
// observables support operators from this library(RxJS).
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
// This decorator is optional unless the service has an injected dependency on its own. However, it is good pratice to add it to every service.
var ProductService = (function () {
    // this is an injected dependency
    function ProductService(_http) {
        this._http = _http;
        this._productUrl = 'api/products/products.json';
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get(this._productUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts()
            .map(function (products) { return products.find(function (p) { return p.productId === id; }); });
    };
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Server error");
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
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
//# sourceMappingURL=product.service.js.map