import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [BrowserModule,FormsModule, RouterModule.forChild(customerRoutes)],
  exports: [],
  providers: [CustomerService],
})
export class CustomerModule {}
