import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {
  book:Book = new Book();
  constructor(private http: HttpClient) {}

  getBooks(book : Book){
    console.log(book);
      return this.http.post(""+book, {responseType : 'text' as 'json'});
  }

  getAllBooks(category : number) {
    let response =  this.http.get("https://localhost:44356/api/books/category/"+category);
    return response;
  }
 
}
