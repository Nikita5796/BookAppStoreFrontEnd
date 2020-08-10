import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routes';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ BooklistComponent, BookdetailsComponent, AddBookComponent],
  imports: [BrowserModule, RouterModule.forChild(bookRoutes), FormsModule, HttpClientModule],
  exports: [BooklistComponent],
  providers: [BookService],
})
export class BookModule {}
