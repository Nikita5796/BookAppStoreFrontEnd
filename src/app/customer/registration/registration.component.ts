import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import {CustomerService} from '../customer.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit{
  states = ['Maharashtra', 'Madhya Pradesh', 'Karnataka', 'Uttar Pradesh'];
  cities = ['Mumbai', 'Bhopal', 'Banglore', 'Gurgaon'];

  customer : customer = new customer();

  constructor(private service1 : CustomerService, private router : Router) {}

  ngOnInit() {

  }

  public doRegister(){
    //alert("hi");
    let response = this.service1.doRegistration(this.customer);

    console.log(this.customer);

    response.subscribe((data) =>
    console.log(data)
    );
    alert("user register successfully");
  }

  customTrackBy(index: number, obj: any): any {
    return index;
}
}
