import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  doRegistration(customerRegistration) {
    return this.http.post("https://localhost:44356/api/users/register",customerRegistration);
  }

  doLogin(customerlogin) {
    return this.http.post("https://localhost:44356/api/users/login", customerlogin);
  }

  getCities(){
    let result = this.http.get("https://localhost:44356/api/users/cities");
    return result;
  }

  getStates(){
    let result = this.http.get("https://localhost:44356/api/users/states");
    return result;
  }
}
