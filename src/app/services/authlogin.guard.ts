import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { Injectable } from "@angular/core";
import { HttphandlerService } from "../shared/http-handler.service";


@Injectable({
    providedIn: 'root'
  })

export class Authguardlogout implements CanActivate{
  department = localStorage.getItem('role');
  constructor( private httpserve : HttphandlerService, private router : Router){}
    canActivate( route : ActivatedRouteSnapshot, state: RouterStateSnapshot) :boolean {
        if (!this.httpserve.isAuthenticated) {
            return true; 
          } else {
            if(this.department == 'Staff'){
              this.router.navigate(['/staffdash'])
            }else if(this.department == 'HOD'){
              this.router.navigate(['/hoddashboard'])
            }
            return false;
          }
}
}