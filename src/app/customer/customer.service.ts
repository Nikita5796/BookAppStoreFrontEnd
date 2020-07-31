import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {
  
    constructor(private http: HttpClient) {}

  doRegistration(customerRegistration){
      console.log(customerRegistration);
      return this.http.post("https://localhost:44378/api/users/add"+customerRegistration, {responseType : 'text' as 'json'});
  }

  doLogin(customerlogin){
    console.log(customerlogin);
    return this.http.post("https://localhost:44356/api/users/login",customerlogin, {responseType : 'text' as 'json'});
  }

  // isUserLoggedIn(){
  //   let user = sessionStorage.getItem('validData')
  //   console.log(!user === null)
  //   return !(user === null)
  // }

  // logOut(){

  //   sessionStorage.removeItem('validData')
  // }

}
