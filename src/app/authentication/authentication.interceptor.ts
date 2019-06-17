import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req;
        let identifiedPerson = this.authenticationService.identifiedPerson;
        if (identifiedPerson) {
            request = req.clone({
                setHeaders: {
                    Authentication: `Basic: ${btoa(`${identifiedPerson.login}:${identifiedPerson.password}`)}`
                },
                withCredentials: true
            });
        }

        return next.handle(request);
    }
}