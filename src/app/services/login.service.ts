import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/modals/Users';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  getUser():Observable<User>{
    let url = 'http://localhost:3000/users'
    return this.http.get<User>(url);
  }
}
