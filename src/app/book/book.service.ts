import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {
  book: Book = new Book();
  constructor(private http: HttpClient) { }

  getAllBooks(category: number) {
    let response = this.http.get("https://localhost:44356/api/books/category/" + category);
    return response;
  }

  getBookById(bookId: number) {
    let result = this.http.get('https://localhost:44356/api/books/' + bookId);
    return result;
  }

  addBook(book: Book) {
    let result = this.http.post("https://localhost:44356/api/books", book);
    return result;
  }

  getCategories(){
    let result = this.http.get("https://localhost:44356/api/books/categories");
    return result;
  }

}
