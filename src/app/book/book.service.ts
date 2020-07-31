import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {
  book:Book = new Book();
  constructor(private http: HttpClient) {}


  // getBookById(bookId: number): Observable<Book> {
  //   return this.http.get<Book>("https://localhost:44356/api/books/" + bookId);
  // }

  getBooks(book : Book){
    console.log(book);
      return this.http.post(""+book, {responseType : 'text' as 'json'});
  }

  getAllBooks(category : number) {
    console.log(category +" hello");
    let result =  this.http.get("https://localhost:44356/api/books/category/"+category);
    console.log(result);
    return result;
  }
}
