import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



export interface canComponentDeactivate {
  canDeativate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuardService implements CanDeactivate<canComponentDeactivate> {

  canDeactivate(component : canComponentDeactivate,
    currentRounte : ActivatedRouteSnapshot,
    currentState : RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


      return component.canDeativate();
    }
}
