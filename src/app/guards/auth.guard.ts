import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    // private loginService:LoginService,
    // private router:Router
    ){
  }

  canActivate(): Observable<boolean> {
    // return this.loginService.currentUser$.pipe(map(user =>{
    //   if(user) return true;
    //   this.router.navigate(['/']);
    // }));
    return;
  }
  
}
