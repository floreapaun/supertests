import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import User from '../models/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    url = (environment.production) ? 
	environment.backend_prod_url : environment.backend_dev_url;

    constructor(private http: HttpClient,
      private router: Router, ) {
      this.currentUserSubject = new BehaviorSubject <User> ({} as any);
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    deleteUser() {
        //here must be an api call for mongodb deletion of the user
    }

    login(username, password) {
        return this.http.post<any>(`${this.url}/user/login`, { username, password })
            .pipe(map(data => {
                this.currentUserSubject.next(data.user);
                return data.user;
            }));
    }

    logout() {
        // we empty the observable
        this.currentUserSubject.next({} as any);

        this.router.navigate(['/login']); 
    }
}
