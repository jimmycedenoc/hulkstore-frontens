import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private http: HttpClient) { }
    async getAllInventory(): Promise<any> {
        return this.http.get('api/inventory').toPromise();
    }

}