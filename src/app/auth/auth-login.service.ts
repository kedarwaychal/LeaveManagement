import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router"
import { HttphandlerService } from "../shared/http-handler.service";
import { Observable } from "rxjs"
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })

export class Authguardlogin implements CanActivate{
    constructor( private httpserve : HttphandlerService, private router : Router){}
    canActivate( route : ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean {
       if(!this.httpserve){
        return true;
       }else{
        return false;
       }
}
}