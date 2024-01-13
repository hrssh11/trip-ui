import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  api_version = 'http://localhost:9090/api';
  constructor(private http : HttpClient ) { }

 
  getAllemployee(){
    const url = this.api_version  + '/users/'
    return this.http.get(url);
  }
  

}
