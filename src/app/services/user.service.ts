import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/User';
import { environment } from './../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    url = (environment.production) ? 
	environment.backend_prod_url : environment.backend_dev_url;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.url}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.url}/user/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/users/${id}`);
    }
}
