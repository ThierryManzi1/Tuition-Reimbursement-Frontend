import { BasicAuthService } from './../login/basic-auth.service';
import { HardCodedAuthService } from './../login/hard-coded-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private hardCodedAuthService:HardCodedAuthService,
    private basicAuthService: BasicAuthService,
    private router: Router,
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.basicAuthService.isUserLoggedIn())
      return true;
    this.router.navigate(['login'])
    return false;
  }

}
