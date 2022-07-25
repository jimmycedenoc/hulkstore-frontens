import { Component, Input, TemplateRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { ActionList } from './actions.model';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    @Input() titleLayout: string = "";
    @Input() subtitle?: string;
    @Input() actions: Array<ActionList> = new Array();
    @Input() searchs: any;

    constructor(readonly layoutService: LayoutService) { }

    getClasses() {
        const classes = {
            'pinned-sidebar': this.layoutService.getSidebarStat().isSidebarPinned,
            'toggeled-sidebar': this.layoutService.getSidebarStat().isSidebarToggeled
        };
        return classes;
    }

    toggleSidebar() {
        this.layoutService.toggleSidebar();
    }
}
