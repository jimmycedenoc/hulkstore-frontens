import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    // ResetPasswordComponent,
    SigninComponent,
    SignupComponent,
    LoginComponent,
    // ActivateAccountComponent,
    // ChangePasswordComponent
} from './components';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent, children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent },
            // { path: 'reset-password', component: ResetPasswordComponent },
            // { path: 'activate-account/:encryptMail', component: ActivateAccountComponent },
            // { path: 'change-password/:encryptMail', component: ChangePasswordComponent },
            { path: '**', redirectTo: 'signin', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
