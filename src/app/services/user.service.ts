import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
    url = 'https://apptestino.herokuapp.com';

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
