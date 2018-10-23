import {Injectable} from '@angular/core';
import {ContactHttpService} from '../services/contact-http.service';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VolunteerContactResolverService implements Resolve<any> {

  constructor(private service: ContactHttpService, private router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.service.getContact('volunteer').pipe(
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

