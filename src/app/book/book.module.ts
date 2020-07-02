import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routes';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BookListComponent, BookDetailsComponent],
  imports: [BrowserModule, RouterModule.forChild(bookRoutes), HttpClientModule],
  exports: [],
  providers: [BookService],
})
export class BookModule {}
