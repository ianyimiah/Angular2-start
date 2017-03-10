import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand">{{pageTitle}}</a>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
    </div>      
    <div class="container">
        <router-outlet></router-outlet>
    </div> 
    <hr>
    <my-products></my-products>
    `
})

export class AppComponent{
    pageTitle: string = `Acme Product Management`;
}


/*  
Personal Notes
    backticks are similar to string literals but backticks allow for multiline strings



    when a component contains directives like <pm-products></pm-products>, angular looks to the the module the component belongs to in order to determine the directives that are visible to that component.
    Remember, a component can only belong to one and only one angular module. However a declared component can be imported in another module.
 */