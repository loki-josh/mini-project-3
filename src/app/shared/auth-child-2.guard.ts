import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthChild2Guard implements CanActivateChild {
  constructor(private shared:SharedService){

  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.shared.username === "lokesh" && this.shared.password === "123"){
      console.log("child route is allowing user to access")
      return true;
    }
    else{
      console.log("child rout is restricting user to access the page")
      return false;
    }
  }
  
}
