import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { HomeComponent } from './home/home.component';
import { CustomerModule } from './customer/customer.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth/auth.guard';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BookModule,
    CustomerModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
