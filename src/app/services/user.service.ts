import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/models/';

@Injectable({ providedIn: 'root' })
export class UserService {
    url = 'http://localhost:4200/';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.url}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.url}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/users/${id}`);
    }
}
