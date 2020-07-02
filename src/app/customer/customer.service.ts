import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {
  
    constructor(private http: HttpClient) {}

  doRegistration(customerRegistration){
      console.log(customerRegistration);
      return this.http.post("https://localhost:44378/api/users/add",customerRegistration, {responseType : 'text' as 'json'});
  }
}
