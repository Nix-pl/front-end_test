import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private logIn: AuthService) {}

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.logIn.checkLogIn().then((isLogIn: boolean) => {
      if (isLogIn) {
        return true;
      } else {
        return false;
      }
    });
  }
}
