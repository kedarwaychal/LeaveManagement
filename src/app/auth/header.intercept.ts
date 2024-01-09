import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class Headinterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req :HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let modifidreq = req.clone({
            setHeaders : {'mytoken' : 'isloggin'}
        })
        return next.handle(modifidreq)
    }
}