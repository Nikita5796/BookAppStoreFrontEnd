import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routes';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forChild(bookRoutes), HttpClientModule],
  exports: [],
  providers: [BookService],
})
export class BookModule {}
