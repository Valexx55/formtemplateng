//PASO 1, DEFINO EL INTERCEPTOR
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class Interceptor implements HttpInterceptor {
constructor() { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

console.log("peticiÃ³n interceptada ... ");

console.log ("Valor content type " + req.headers.get('Content-Type'));

//enviamos la nueva peticiÃ³n
return next.handle(req);
}
}