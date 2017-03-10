import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import { ProductModule } from './products/product.module';

import { MyProductService } from './products/my-products.service';
import { MyProductsComponent } from './products/my-products.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule ,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo:'welcome' , pathMatch: 'full' },
      { path: '**', redirectTo:'welcome' , pathMatch: 'full' }
    ]), 
    // the router's forRoot methods tells the router about the configured routes
    
    ProductModule
    ],// defines external modules that are made available to this angular module
  
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    MyProductsComponent
    ], // defines the components that belong to this angular module

    providers: [MyProductService],

  bootstrap: [ AppComponent ] // defines the root component of the application 
})
export class AppModule { }


/*
  AN ANGULAR MODULE DEFINES THE BOUNDARY OR CONTEXT WITHIN WHICH A COMPONENT RESOLVES ITS DIRECTIVES AND DEPENDENCIES. 

  a component must belong to one and only one angular module. If a component is declared by one module, 
  it can not be declared by any other module. However,a declared component can be imported in other modules like BrowserModule
  
  The AppComponent belongs to this module.
*/