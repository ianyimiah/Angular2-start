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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var product_module_1 = require("./products/product.module");
var my_products_service_1 = require("./products/my-products.service");
var my_products_component_1 = require("./products/my-products.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            // the router's forRoot methods tells the router about the configured routes
            product_module_1.ProductModule
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            my_products_component_1.MyProductsComponent
        ],
        providers: [my_products_service_1.MyProductService],
        bootstrap: [app_component_1.AppComponent] // defines the root component of the application 
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
/*
  AN ANGULAR MODULE DEFINES THE BOUNDARY OR CONTEXT WITHIN WHICH A COMPONENT RESOLVES ITS DIRECTIVES AND DEPENDENCIES.

  a component must belong to one and only one angular module. If a component is declared by one module,
  it can not be declared by any other module. However,a declared component can be imported in other modules like BrowserModule
  
  The AppComponent belongs to this module.
*/ 
//# sourceMappingURL=app.module.js.map