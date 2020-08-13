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

  constructor(private customerservice: CustomerService, private router: Router) { }

  ngOnInit() {

  }

  doLogin() {
    let response = this.customerservice.doLogin(this.customer);
    response.subscribe((data: any) => {
      localStorage.setItem('userID',data.userId);
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('userName', data.userName);
      this.router.navigate(['home']);
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }
}
