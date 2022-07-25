import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, NavbarComponent, SidebarComponent, LayoutComponent } from './components';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        LayoutComponent],
    imports: [
        CommonModule,
        NgbModule,
        NgbCollapseModule,
        RouterModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }
