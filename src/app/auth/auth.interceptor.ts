import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttphandlerService } from "../shared/http-handler.service";
import { Injectable } from "@angular/core";

@Injectable()

export class Jwtinterceptor implements HttpInterceptor{
    constructor(private httpserve: HttphandlerService){}
    intercept(req : HttpRequest<any> ,next : HttpHandler):Observable<HttpEvent<any>>{
        let id = this.httpserve.currrentAuthResp.idToken;
        let modifiedrequest = req.clone({params :req.params.append('auth',id)})
        return next.handle(modifiedrequest)
    }
}





