import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class VolunteerHttpService {

  constructor(private http: HttpClient) {
  }

  public register(body): Observable<any> {

    return this.http.post<any>(`${environment.apiUrl}/crm/volunteer/register`, body, {headers: headers}).pipe(
      map((response: any) => {

        return true;
      }),
      catchError(err => of(undefined))
    );
  }

  public getRegions(): Observable<any> {

    return this.http.get<any>(`${environment.apiUrl}/crm/volunteer/regions`).pipe(
      map((response: any) => {

        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public getVolunteerAssistants() {

    return this.http.get<any>(`${environment.apiUrl}/crm/volunteer/assistants`).pipe(
      map((response: any) => {

        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public getVolunteerAssistant(id) {

    return this.http.get<any>(`${environment.apiUrl}/crm/volunteer/assistant?id=${id}`).pipe(
      map((response: any) => {

        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public updateVolunteerAssistant(body) {

    return this.http.post<any>(`${environment.apiUrl}/crm/volunteer/assistant-update`, body, {headers: headers}).pipe(
      map((response: any) => {

        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }

  public getSchedule(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/crm/volunteer/schedule`).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public updateAssignedShift(body): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/crm/volunteer/actual-assigned-hours`, body).pipe(
      map((response) => {
        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }

  public updateAssistantShift(body): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/crm/volunteer/actual-assistant-hours`, body).pipe(
      map((response) => {
        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }
}


