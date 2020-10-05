import { Injectable, Inject } from '@angular/core';
import { HttpHandler } from '@angular/common/http';
import {
  HttpEvent,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { filter, map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { BASE_URL_TOKEN } from './config';

export interface IRes<T> {
  data: T;
  error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) {}

  public intercept<T extends IRes<T>>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpResponse<T>> {
    const headers: HttpHeaders = req.headers.append(
      'Content-Type',
      'application/json'
    );
    const jsonReq: HttpRequest<T> = req.clone({
      headers,
      url: `${this.baseUrl}${req.url}`,
    });
    return next.handle(jsonReq).pipe(
      filter((event: HttpEvent<IRes<T>>): event is HttpResponse<IRes<T>> => {
        if (event instanceof HttpResponse) {
          return true;
        }
        return false;
      }),
      // tslint:disable-next-line:typedef
      map((res: HttpResponse<IRes<T>>) => {
        return res.clone({ body: res.body && res.body.data });
      }),
      catchError(
        (): Observable<never> => {
          return EMPTY;
        }
      )
    );
  }
}

// import { Inject, Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
//   HttpResponse,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { filter, map } from 'rxjs/operators';
// import { BASE_URL } from './config';

// export interface IProduct {
//   _id: string;
//   title: string;
//   img: string;
//   price: number;
//   author: string;
//   isFavorite: boolean;
// }

// @Injectable()
// export class InterceptorService implements HttpInterceptor {
//   constructor(@Inject(BASE_URL) private baseUrl: string) {}

//   public intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const headers = req.headers.append(
//       'Authorization',
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lcGlwZW5rbzEiLCJpYXQiOjE1NzYxNzgxNzN9.-dXOEZhBVHXp3goe7DROuoVTKSNIUjL-0hYDIhdzd00'
//     );
//     const resultReq = req.clone({
//       headers,
//       url: `${this.baseUrl}${req.url}`,
//     });

//     return next.handle(resultReq).pipe(
//       filter((event: HttpEvent<any>): event is HttpResponse<any> => {
//         console.log(111);
//         return event instanceof HttpResponse;
//       }),
//       map((res: HttpResponse<any>) => {
//         return res.clone({ body: res.body && res.body.data });
//       })
//     );
//   }
// }
