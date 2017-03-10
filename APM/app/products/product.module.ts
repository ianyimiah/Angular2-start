import { NgModule } from "@angular/core"; // ngModel is part of the FormsModule. ngModel is needed for 2-way binding
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailGuard } from "./product-guard.service";
import { ProductService } from "./product.service";
import { StarComponent } from "../shared/star.component";

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        // .forChild is used here in order to avoid re-registering the router service. .forRoot does that.
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', 
                canActivate: [ ProductDetailGuard ],
                component: ProductDetailComponent }
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]

})
export class ProductModule {}