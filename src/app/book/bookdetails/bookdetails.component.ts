import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: []
})
export class BookdetailsComponent implements OnInit {
  book: Book;

  constructor( private bookService: BookService, private config: NgbRatingConfig, private route: ActivatedRoute) {
    config.readonly = true;
    config.max=5;
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map: ParamMap) => {
      let bookId = +map.get("id");
      this.bookService.getBookById(bookId)
      .subscribe((result : Book) => 
      this.book = result)
    })
  }
}
