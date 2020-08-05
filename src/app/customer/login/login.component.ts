import { Component } from '@angular/core';
import { customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {

  customer: customer = new customer();
  isLoginError: boolean = false;

  constructor(private service1: CustomerService, private router: Router) { }

  ngOnUnit() {

  }

  doLogin() {
    let response = this.service1.doLogin(this.customer);
    console.log(this.customer);
    response.subscribe((data: any) => {
      console.log(data.token);
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('username', data.username);
      this.router.navigate(['home']);
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }
}
