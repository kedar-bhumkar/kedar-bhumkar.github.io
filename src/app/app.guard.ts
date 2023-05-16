import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { OktaAuthService } from './app.service';

@Injectable({ providedIn: 'root' })
export class OktaAuthGuard implements CanActivate {
  constructor(private okta: OktaAuthService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('url resolved - ' + this.getResolvedUrl(route));
    const authenticated = await this.okta.isAuthenticated();
    console.log('authenticated - ' + authenticated)
    if (authenticated) {
      /*let res = route.data['role'].includes();
      if(!res){this.router.navigate(['/error'])}*/
      //@TODO - role based denial
      return true;
    }

    // Redirect to login flow.
    this.okta.login(state.url);
    return false;
  }

  getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot
      .map((v) => v.url.map((segment) => segment.toString()).join('/'))
      .join('/');
  }
}
