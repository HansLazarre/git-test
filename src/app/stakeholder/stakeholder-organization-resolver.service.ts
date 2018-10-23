import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {StakeholderHttpService} from './stakeholder-http.service';

@Injectable({
  providedIn: 'root'
})
export class StakeholderOrganizationResolverService implements Resolve<any> {

  constructor(private service: StakeholderHttpService, private router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const id = route.paramMap.get('id');

    return this.service.getOrganization(id).pipe(
      map(data => {

        if (data === undefined) {
          // todo
          this.router.navigate(['/bad-request']);
        }

        return data;
      })
    );
  }
}
