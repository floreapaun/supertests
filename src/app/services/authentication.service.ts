import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import User from '../models/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    url = 'http://localhost:3000';

    constructor(private http: HttpClient, 
                private router: Router,) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    deleteUser() {
        //here must be an api call for mongodb deletion of the user
    }

    login(username, password) {
        console.log("authentication.service: login() started ");
        return this.http.post<any>(`${this.url}/user/login`, { username, password })
            .pipe(map(user => {

                //after successfully login the observable will contain the username
                this.currentUserSubject.next(user.username);
                return user.username;
            }));
    }

    logout() {
        // we empty the observable
        this.currentUserSubject.next(null);

        this.router.navigate(['/login']); 
    }
}
