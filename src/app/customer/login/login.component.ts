import { Component } from '@angular/core';
import { customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {

  customer : customer = new customer();

  constructor(private service1 : CustomerService, private router : Router){}

  ngOnUnit(){
    
  }

  public doLogin(){
    //alert("hi");
    let response = this.service1.doLogin(this.customer);

    console.log(this.customer);

    response.subscribe((data) =>
    console.log(data)
      
    );
    alert("successfully Logged in");
    this.router.navigateByUrl('booklist');

  }

}
