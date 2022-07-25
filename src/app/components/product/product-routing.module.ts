import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { AccessGuard } from '../../guards/accessGuard.canActive';
import { EditComponent } from './components/edit/edit.component';
import { BuyComponent } from './components/buy/buy.component';

const routes: Routes = [
    { path: 'product', component: ProductComponent, canActivate: [AccessGuard] },
    { path: 'product/edit/:id', component: EditComponent, canActivate: [AccessGuard] },
    { path: 'product/buy/:id', component: BuyComponent, canActivate: [AccessGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
