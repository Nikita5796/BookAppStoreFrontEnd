import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routes';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './booklist/booklist.component';


@NgModule({
  declarations: [ BooklistComponent],
  imports: [BrowserModule, RouterModule.forChild(bookRoutes), HttpClientModule],
  exports: [BooklistComponent],
  providers: [BookService],
})
export class BookModule {}
