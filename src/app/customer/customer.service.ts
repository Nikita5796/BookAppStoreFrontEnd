import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  doRegistration(customerRegistration) {
    return this.http.post("https://localhost:44378/api/users/add" + customerRegistration, { responseType: 'text' as 'json' });
  }

  doLogin(customerlogin) {
    return this.http.post("https://localhost:44356/api/users/login", customerlogin, { responseType: 'text' as 'json' });
  }
}
