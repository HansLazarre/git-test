import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';

import {CookieService} from 'ngx-cookie-service';

import {ApiResponse} from '../models/ApiResponse';
import {LoggerService} from './logger.service';

import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable()
export class AuthService {

  public isAuthenticated = true;//false
//hans test
  public redirectUrl = '/home';
  //public redirectUrl = '/stakeholder/stakeholder-contact';

  public readonly loginRoute = ['/login'];

  private _contact;
  private _stakeholderStatus;
  private _volunteerStatus;
  private _isOrgOwner;
  private _isCoordinator;

  constructor(private http: HttpClient, private logger: LoggerService, private cookie: CookieService) {
    this.verifyAuthentication();
  }

  public verifyAuthentication() {

    this.logger.debug('Verifying Auth');

    try {
      this._contact = this.getContact();
      this._stakeholderStatus = this.getStakeholderStatus();
      this._volunteerStatus = this.getVolunteerStatus();
      this._isOrgOwner = this.getIsOrganizationOwner();
      this._isCoordinator = this.getIsCoordinator();
    }
    catch (e) {
      // Unexpected token u in JSON at position 0
      this.logger.error('Invalidating login');
    }

    this.isAuthenticated = (this._stakeholderStatus !== undefined);

    return this.isAuthenticated;
  }

  public invalidate(redirectUrl?) {

    this.logger.debug(`Redirect url ${redirectUrl}`);

    if (redirectUrl !== undefined) {
      this.redirectUrl = redirectUrl;
    }

    this.cookie.delete('contact');
    this.cookie.delete('stakeholderStatus');
    this.cookie.delete('volunteerStatus');
    this.cookie.delete('isCoordinator');
    this.cookie.delete('isOrgOwner');

    this._contact = undefined;
    this._stakeholderStatus = undefined;
    this._volunteerStatus = undefined;
    this._isOrgOwner = undefined;
    this._isCoordinator = undefined;

    this.isAuthenticated = false;
  }

  /**
   * @param body
   */
  public login(body): Observable<boolean> {

    return this.http.post<any>(`${environment.apiUrl}/portal/login`, body, {headers: headers}).pipe(
      map((response: ApiResponse) => {

        this.cookie.set('contact', btoa(JSON.stringify(response.data.contact)));

        return this.verifyAuthentication();

      }),
      catchError(err => {
        return of(undefined);
      })
    );
  }

  /**
   *
   */
  public logout() {
    return this.http.post<any>(`${environment.apiUrl}/portal/logout`, {}, {headers: headers}).pipe(
      map((response: ApiResponse) => {

        if (response.status === 'success') {

          this.logger.debug('Invalidating login');

          this.invalidate();

          return true;
        }

        return false;
      }),
      // catchError(err => of(undefined))
      catchError(err => {
        return of(undefined);
      }));
  }


  get contact() {
    return this._contact;
  }

  get stakeholderStatus() {
    return this._stakeholderStatus;
  }

  get volunteerStatus() {
    return this._volunteerStatus;
  }

  get isOrganizationOwner() {
    return this._isOrgOwner;
  }

  get isCoordinator() {
    return this._isCoordinator;
  }

  /**
   *
   */
  private getContact() {
    if (this.cookie.check('contact')) {
      return JSON.parse(atob(this.cookie.get('contact')));
    }
    return undefined;
  }

  private getStakeholderStatus() {
    if (this.cookie.check('stakeholderStatus')) {
      return parseInt(this.cookie.get('stakeholderStatus'));
    }
    return undefined;
  }

  private getVolunteerStatus() {
    if (this.cookie.check('volunteerStatus')) {
      return parseInt(this.cookie.get('volunteerStatus'));
    }

    return undefined;
  }

  private getIsCoordinator() {
    if (this.cookie.check('isCoordinator')) {
      return this.cookie.get('isCoordinator') === 'true';
    }

    return undefined;
  }

  private getIsOrganizationOwner() {
    if (this.cookie.check('isOrgOwner')) {
      return this.cookie.get('isOrgOwner') === 'true';
    }
    return undefined;
  }
}
