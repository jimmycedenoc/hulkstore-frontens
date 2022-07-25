import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
    constructor(readonly layoutService: LayoutService) { }

    ngOnInit(): void {
        this.getMenu();
    }

    private async getMenu() {
        await this.layoutService.getMenuByUser();
    }
}
