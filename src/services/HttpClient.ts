import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpClient {
  urlPrefix = 'http://localhost:5050/';
  constructor(public http: Http) {
      this.http = http;
      // this.http.get = function(url){
      //   return http.get(url, { withCredentials: true });
      // };
  }

}
