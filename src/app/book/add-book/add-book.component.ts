import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent implements OnInit {

  BookCategories = ['programming', 'biographies', 'Business', 'References'];
  categoryIds = [1, 2, 3, 4];
  Book: Book = new Book();
  AddBookForm;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  addBook() {
    var str = "assets/images/" + this.Book.title.split(' ').join('_').toLowerCase().concat(".jpeg");
    this.Book.imageUrl = str;

    let Response = this.bookService.addBook(this.Book);
    Response.subscribe((data) => {
      alert("New book added Successfully.");
      this.router.navigate(['home']);
    });

  }

}
