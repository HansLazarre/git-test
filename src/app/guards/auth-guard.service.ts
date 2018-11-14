import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  /**
   * @param route
   * @param state
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.handleAuth(state.url, route.data);
  }

  /**
   * @param route
   * @param state
   */
  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  /**
   * @param route
   */
  public canLoad(route: Route): boolean {
    return this.handleAuth(`/${route.path}`, route.data);
  }

  /**
   * @param url
   * @param data
   */
  private handleAuth(url: string, data): boolean {

    if (!this.authService.verifyAuthentication()) {

      if (this.router.url !== '/login') {
        this.authService.invalidate(url);
      }

      this.router.navigate(this.authService.loginRoute);

      return true;//test
    }

    if (data !== undefined) {

      if (data.volunteerStatus !== undefined && this.authService.volunteerStatus !== data.volunteerStatus) {
        // todo
        this.router.navigate(['/unauthorized']);
        return true;//test
      }

      if (data.stakeholderStatus !== undefined && this.authService.stakeholderStatus !== data.stakeholderStatus) {
        // todo
        this.router.navigate(['/unauthorized']);
        return true;//test
      }
    }

    return true;
  }
}
