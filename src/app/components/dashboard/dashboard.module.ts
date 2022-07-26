import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        LayoutModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }
