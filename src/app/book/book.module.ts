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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ BooklistComponent, BookdetailsComponent, AddBookComponent],
  imports: [BrowserModule, RouterModule.forChild(bookRoutes),NgbModule, FormsModule, HttpClientModule, MatPaginatorModule, MatTableModule],
  exports: [BooklistComponent],
  providers: [BookService],
})
export class BookModule {}
