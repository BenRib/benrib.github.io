import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IdentifiedPerson } from './identified-person.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  identifiedPerson: IdentifiedPerson;
  loggedIn = new EventEmitter<void>();

  login(): Observable<boolean> {
    this.identifiedPerson = new IdentifiedPerson();
    this.loggedIn.next();
    return of(true);
  }

  logout(): void {
    this.identifiedPerson = null;
    this.loggedIn.next();
  }

  resetPassword(): Observable<boolean> {
    return of(true);
  }
}
