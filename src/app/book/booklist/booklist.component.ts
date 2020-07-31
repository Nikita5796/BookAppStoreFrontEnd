import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
})
export class BooklistComponent implements OnInit {

  constructor(private bookService: BookService,private config: NgbRatingConfig, private router : Router) { 
    config.readonly = true;
    config.max=5;
  }

  books : Book[] = [];

  ngOnInit() {
    let categoryid = 1;
    this.bookService.getAllBooks(categoryid).subscribe((data:Book[]) => {
      this.books = data;
    });
  }

}
