import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {
    LoginComponent,
    SignupComponent,
    SigninComponent
} from './components';
import { LoginRoutingModule } from './login-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        LoginRoutingModule,
        NgbModule,
        NgbCollapseModule,
        RouterModule
    ],
    exports: [
    ]
})
export class LoginModule { }
