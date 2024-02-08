import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'express';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';

@Injectable()
export class commonInterceptor implements HttpInterceptor{
  constructor(private toastr: ToastrService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.toastr.success('API Call Successful', 'Success!');
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            this.toastr.error('API Call Failed', 'Error');
          }
        }
      )
    );
  }
  }
  

