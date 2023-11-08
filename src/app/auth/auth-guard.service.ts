import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router"
import { HttphandlerService } from "../shared/http-handler.service"
import { Observable } from "rxjs"
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })

export class Authguard implements CanActivate{
    constructor( private httpserve : HttphandlerService, private router : Router){}
    canActivate( route : ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean {
        if (this.httpserve.isloggin()) {
            return true; 
          } else {
            this.router.navigate(['/login']);
            return false;
          }
}
}