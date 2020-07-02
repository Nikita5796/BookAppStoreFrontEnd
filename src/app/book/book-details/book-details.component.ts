import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((map: ParamMap) => {
      const bookId = +map.get('bookId');
      this.bookService.getBookById(bookId).subscribe((data) => {
        this.book = data;
      });
    });
  }
}
