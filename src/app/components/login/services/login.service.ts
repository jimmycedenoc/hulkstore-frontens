import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    async singup(singupData: any): Promise<any> {
        return this.http.post('api/user/singup', singupData).toPromise();
    }
}
