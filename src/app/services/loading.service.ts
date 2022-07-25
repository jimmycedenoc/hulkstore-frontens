import { Injectable } from '@angular/core';

const textColor = [
    'text-primary',
    'text-secondary',
    'text-success',
    'text-danger',
    'text-warning',
    'text-info',
    'text-dark',
    'text-light'
];
@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    loading: boolean = false;
    text: string = "";

    constructor() {

    }

    show() {
        this.text = textColor[Math.floor(Math.random() * textColor.length)];
        Promise.resolve(null).then(() => this.loading = true);
    }

    hide() {
        Promise.resolve(null).then(() => this.loading = false);
    }
}
