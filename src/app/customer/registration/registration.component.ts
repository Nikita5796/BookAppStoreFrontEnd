import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import {CustomerService} from '../customer.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit{
  states = {};
  cities = {};
  Gender = ["Male","Female"];

  customer : customer = new customer();

  constructor(private customerservice : CustomerService, private router : Router) {}

  ngOnInit() : void{
    this.customerservice.getCities().subscribe(data=>{
      this.cities = data;
    });

    this.customerservice.getStates().subscribe(data=>{
      this.states = data;
    })
  }

  public doRegister(){
    let response = this.customerservice.doRegistration(this.customer);
    response.subscribe((data) =>{
      alert("New user added Successfully.");
      this.router.navigate(['login']);
    });
  }

}
