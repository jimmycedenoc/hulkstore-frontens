import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ActionList } from '../../../layout/components/layout/actions.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    actions: Array<ActionList> = [];
    products: any[] = Array<any>();
    constructor(readonly productService: ProductService,
        readonly messageService: ToastrService,
        readonly router: Router) { }

    ngOnInit(): void {
        this.actions.push(
            {
                function: this.add.bind(this),
                icon: 'fa fa-plus-circle',
                name: 'Nuevo',
            });

        this.getAllCategories();
    }

    async getAllProducts() {
        try {
            this.products = <any[]>await this.productService.getAllProduts();
            this.products.map((r) => {
                r.categoryEntity = this.productService.categories.filter(c => c.id === r.categoryCode)[0]
            });
        } catch (err) {
            this.messageService.error('Error al obtener los productos');
        }
    }

    async getAllCategories() {
        try {
            this.productService.categories = <any[]>await this.productService.getAllCategories();
            this.getAllProducts();
        } catch (err) {
            this.messageService.error('Error al obtener categorias.');
        }
    }

    add() {
        this.messageService.clear();
        this.editProduct({ id: 0 });
    }

    editProduct(product: any) {
        this.productService.product = product;
        this.router.navigate(['product/edit', product.id]);
    }

    buyProduct(product: any) {
        this.productService.product = product;
        this.router.navigate(['product/buy', product.id]);
    }

}
