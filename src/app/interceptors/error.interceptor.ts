import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../services/loading.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService,
        // readonly router: Router, 
        readonly messageService: ToastrService,
        readonly loading: LoadingService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loading.show();
        return next.handle(request).pipe(tap((event) => {

            if (event instanceof HttpResponse) {
                this.loading.hide()
            }
        }), catchError(err => {
            if (err.status === 401 || err.status === 403) {
                this.authenticationService.logout();
            }

            this.messageService.error(err.headers.get('mes') || 'Ocurrio un error inesperado.');
            this.loading.hide()
            return throwError(err);
        }))
    }
}