import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { LayoutModule } from './components/layout/layout.module';
import { LoginModule } from './components/login/login.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModule } from './components/product/product.module';
import { BasicAuthInterceptor } from './interceptors/basic.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            closeButton: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: 'toast-bottom-left',
            preventDuplicates: true,
            timeOut: 10000,
            extendedTimeOut: 10000,
        }),
        LayoutModule,
        LoginModule,
        DashboardModule,
        ProductModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: BasicAuthInterceptor,
        multi: true
    }, {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
