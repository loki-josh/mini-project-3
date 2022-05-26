import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private shared:SharedService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.shared.username === 'lokesh' && this.shared.password === '123'){
      console.log("routing guard is activated and return true ")
      return true;
    }
    else{
      console.log("rouging guard is activated and return false")
      this.router.navigate([("./header")])
      return false;
    }
  }
  
}
