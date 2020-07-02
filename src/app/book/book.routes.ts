import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const bookRoutes: Routes = [
  { path: 'books/:category', component: BookListComponent },
  { path: 'book/:bookId', component: BookDetailsComponent },
];
