import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    isSidebarPinned = false;
    isSidebarToggeled = false;
    avatar: string = '';
    allMenu: any;

    constructor(readonly http: HttpClient) { }

    toggleSidebar() {
        this.isSidebarToggeled = !this.isSidebarToggeled;
    }

    toggleSidebarPin() {
        this.isSidebarPinned = !this.isSidebarPinned;
    }

    getSidebarStat() {
        return {
            isSidebarToggeled: this.isSidebarToggeled,
            isSidebarPinned: this.isSidebarPinned
        };
    }

    async getMenuByUser() {
        if (!this.allMenu) {
            this.allMenu = [
                { "name": "Inventario", "uri": "/inventory", "icon": "fa-television", "order": 1 },
                { "name": "Productos", "uri": "/product", "icon": "fa-product-hunt", "order": 2 },
                { "name": "Categoria", "uri": "/category", "icon": "fa-object-group", "order": 3 },
                { "name": "Comprar", "uri": "/buy", "icon": "fa-shopping-cart", "order": 4 }];
        }
    }
}
