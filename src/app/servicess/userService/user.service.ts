import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_version = 'http://15.206.70.19:8090';
  //api_version = 'http://192.168.1.10:8090';
  constructor(private http : HttpClient ) { }
  onLogin(payload:any){
    const url = this.api_version  + '/login'
    return this.http.post(url , payload);
  }

}
