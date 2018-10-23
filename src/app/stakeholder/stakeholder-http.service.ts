import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';
import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable()
export class StakeholderHttpService {

  constructor(private http: HttpClient) {
  }

  public registerStakeholder(body): Observable<any> {

    return this.http.post<any>(`${environment.apiUrl}/crm/stakeholder/stakeholder-register`, body, {headers: headers}).pipe(
      map((response: any) => {
        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }

  public registerOrganization(body): Observable<any> {

    // this might be in the form without a Id
    if (!body.Organization.References.csc_organizationsubtype.Id) {
      delete body.Organization.References.csc_organizationsubtype;
    }

    return this.http.post<any>(`${environment.apiUrl}/crm/stakeholder/organization-register`, body, {headers: headers}).pipe(
      map((response: any) => {
        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }

  public updateOrganization(body): Observable<any> {

    // this might be in the form without a Id
    if (!body.Organization.References.csc_organizationsubtype.Id) {
      delete body.Organization.References.csc_organizationsubtype;
    }

    return this.http.post<any>(`${environment.apiUrl}/crm/stakeholder/organization-update`, body, {headers: headers}).pipe(
      map((response: any) => {
        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }

  /**
   * accountid
   * @param id
   */
  public getOrganization(id): Observable<any> {

    return this.http.get<any>(`${environment.apiUrl}/crm/stakeholder/organization?id=${id}`).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public getOrganizations(): Observable<any> {

    return this.http.get<any>(`${environment.apiUrl}/crm/stakeholder/organizations`).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public getOwnerOrganizations(): Observable<any> {

    return this.http.get<any>(`${environment.apiUrl}/crm/stakeholder/owner-organizations`).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public getOrganizationAffiliations(id): Observable<any> {

    return this.http.get<any>(`${environment.apiUrl}/crm/stakeholder/organization-affiliations?id=${id}`).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }


  public getOwnerAffiliations(): Observable<any> {

    return this.http.get<any>(`${environment.apiUrl}/crm/stakeholder/owner-affiliations`).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public getOrganizationsTypes(): Observable<any> {

    return this.http.get<any>(`${environment.apiUrl}/crm/stakeholder/organization-types`).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public createAffiliation(organization: any, attributes: any): Observable<any> {

    const body = {csc_organizationid: organization.id, Attributes: attributes};

    return this.http.post<any>(`${environment.apiUrl}/crm/stakeholder/affiliate`, body, {headers: headers}).pipe(
      map((response: any) => {
        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }

  public updateAffiliation(affiliation: any, attributes: any): Observable<any> {

    const body = {csc_affiliationid: affiliation.id, Attributes: attributes};

    return this.http.post<any>(`${environment.apiUrl}/crm/stakeholder/affiliate-update`, body, {headers: headers}).pipe(
      map((response: any) => {
        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }

  public unaffiliate(affiliation: any): Observable<any> {

    const body = {id: affiliation.id};

    return this.http.post<any>(`${environment.apiUrl}/crm/stakeholder/unaffiliate`, body, {headers: headers}).pipe(
      map((response: any) => {
        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }
}
