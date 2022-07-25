import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccessGuard } from '../../guards/accessGuard.canActive';

const routes: Routes = [
    { path: 'inventory', component: DashboardComponent, canActivate: [AccessGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
