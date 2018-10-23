import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {VolunteerHttpService} from './volunteer-http.service';

@Injectable({
  providedIn: 'root'
})
export class VolunteerAssistantResolverService implements Resolve<any> {

  constructor(private service: VolunteerHttpService, private router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const id = route.paramMap.get('id');

    return this.service.getVolunteerAssistant(id).pipe(
      map(data => {

        if (data === undefined) {
          // todo
          this.router.navigate(['/bad-request']);
        }

        return data.Contact;
      })
    );
  }
}
