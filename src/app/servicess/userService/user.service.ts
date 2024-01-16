import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  api_version = 'http://15.206.70.19:8090';
  constructor(private http : HttpClient ) { }

 
  getAllemployee(){
    const url = this.api_version  + '/users/'
    return this.http.get(url);
  }

  onLogin(){
    const url = this.api_version  + '/login'
    return this.http.post(url , '');
  }

}
