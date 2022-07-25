import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    allInventories: Array<any> = new Array<any>();
    constructor(readonly dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.getAllInventories();
    }

    async getAllInventories() {
        this.allInventories = await this.dashboardService.getAllInventory();
    }

}
