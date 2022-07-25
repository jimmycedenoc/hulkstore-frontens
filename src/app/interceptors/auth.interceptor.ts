import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../services/loading.service';

@Injectable({
    providedIn: 'root'
})
export class authInterceptor implements HttpInterceptor {
    constructor(readonly router: Router, readonly messageService: ToastrService,
        readonly loading: LoadingService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loading.show();
        return next.handle(req).pipe(
            tap((event) => {

                if (event instanceof HttpResponse) {
                    this.loading.hide()
                }
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 || error.status === 403) {
                    this.router.navigateByUrl('/login');
                }

                this.messageService.error(error.headers.get('mes') || 'Ah ocurrido un error inesperado.');
                this.loading.hide()
                return throwError(error);
            }),
        );
    }
}
