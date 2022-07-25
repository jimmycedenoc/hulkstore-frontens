import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private _categories: Array<any> = [];
    private _product: any = {};

    constructor(readonly http: HttpClient) { }

    saveProduct(product: any) {
        return this.http.post('/api/product', product).toPromise();
    }

    saveProductBuy(product: any) {
        return this.http.post('/api/buy', product).toPromise();
    }

    updateProduct(product: any) {
        return this.http.put('/api/product', product).toPromise();
    }

    getAllProduts() {
        return this.http.get('/api/product').toPromise();
    }

    getAllCategories() {
        return this.http.get('/api/category').toPromise();
    }

    get categories() {
        return this._categories;
    }

    set categories(categories) {
        this._categories = categories;
    }

    get product() {
        return this._product;
    }

    set product(product) {
        this._product = product;
    }
}
