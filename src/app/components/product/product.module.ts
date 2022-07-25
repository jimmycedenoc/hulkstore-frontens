import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { BuyComponent } from './components/buy/buy.component';


@NgModule({
    declarations: [ProductComponent, EditComponent, BuyComponent],
    imports: [
        CommonModule,
        FormsModule,
        LayoutModule,
        ProductRoutingModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ],
    exports: [ProductComponent, EditComponent, BuyComponent]
})
export class ProductModule { }
