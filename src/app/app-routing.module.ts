import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from 'src/app/guards/accessGuard.canActive';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: 'notfound', component: NotFoundComponent, canActivate: [AccessGuard] },
    // { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
