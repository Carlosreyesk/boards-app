import { Injectable } from '@angular/core';
import { HttpClient } from '../HttpClient';

@Injectable()
export class LoginService {
  
  constructor(public client: HttpClient) {

  }

  getLogin() {
    return this.client.http.get(this.client.urlPrefix + 'login', { withCredentials: true })
    .map(res => res.json());
  }

  postLogin(user) {
    return this.client.http.post(this.client.urlPrefix + 'login', user, { withCredentials: true })
    .map(res => res.json());
  }

  getLogout(){
    return this.client.http.get(this.client.urlPrefix + 'logout', { withCredentials: true })
    .map(res => res.json());
  }

}
