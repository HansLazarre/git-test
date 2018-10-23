import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   *
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = request.clone({withCredentials: true});

    return next.handle(authReq)
      .pipe(
        catchError((error: HttpErrorResponse | any) => {

          if (error.status === 401) {

            // todo test that ill hit this with nest api
            this.router.navigate(this.authService.loginRoute);

          } else if (error.status === 403) {

            if (this.router.url !== '/login') {
              // todo
              this.router.navigate(['/forbidden']);
            }
          }

          return throwError(error);
        })
      );
  }
}
