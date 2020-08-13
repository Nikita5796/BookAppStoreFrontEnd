import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { userInfo } from './customer/login/userInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked{
  title = 'bookapp';
  userInformation : userInfo = new userInfo();
  userId : number;
  static status : boolean = false;

  @ViewChild('userProfile',{ static: true }) userProfile : ElementRef;
  @ViewChild('loginBtn',{ static: true }) loginBtn : ElementRef;
  @ViewChild('logOutBtn',{ static: true }) logOutBtn : ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
    this.display();
  }

  ngAfterViewChecked(){
    if (localStorage.getItem('userID') && !AppComponent.status ){
      this.display();
      this.printlog();
      AppComponent.status = true;
    }   
  }

  display(){
    this.userId = +localStorage.getItem('userID');
    if(this.userId != 0)
    {
      this.userInformation.userId = +localStorage.getItem('userID');
      this.userInformation.userName = localStorage.getItem('userName');
      this.userInformation.token = localStorage.getItem('userToken');
      this.printlog();
    }   
  }

  logOut() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userID');
    localStorage.removeItem('userToken');
    this.userProfile.nativeElement.classList.add('d-none');
    this.loginBtn.nativeElement.classList.remove('d-none');
    this.logOutBtn.nativeElement.classList.add('d-none');
    this.router.navigate(['login']);
    AppComponent.status = false;
    
  }

  printlog () {
    this.userProfile.nativeElement.classList.remove('d-none');
    this.loginBtn.nativeElement.classList.add('d-none');
    this.logOutBtn.nativeElement.classList.remove('d-none');
  }
}
