import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  constructor(private http: HttpClient) {
  }

  public getContact(type) {

    return this.http.get<any>(`${environment.apiUrl}/crm/contact/mycontact?type=${type}`).pipe(
      map((response: any) => {

        return response.data;
      }),
      catchError(err => of(undefined))
    );
  }

  public updateContact(body) {

    return this.http.post<any>(`${environment.apiUrl}/crm/contact/update`, body, {headers: headers}).pipe(
      map((response: any) => {

        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }
}
