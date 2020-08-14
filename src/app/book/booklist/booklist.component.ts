import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
})
export class BooklistComponent implements OnInit {

  bookCategories = {};
  categoryId;
  books : MatTableDataSource<Book>;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private bookService: BookService, private config: NgbRatingConfig, private router : Router) { 
    config.readonly = true;
    config.max=5;
    this.books = new MatTableDataSource<Book>();
  }

  

  ngOnInit() {
    let categoryid = 0;
    this.bookService.getAllBooks(categoryid).subscribe((data:Book[]) => {
      this.books.data = data;
      this.books.paginator = this.paginator;
    });

    this.bookService.getCategories().subscribe(data=>{
      this.bookCategories = data;
    });
  }

  categoryBookList(item : number){
    this.bookService.getAllBooks(item).subscribe((data : Book[])=>{
      this.books.data = data;
      this.books.paginator = this.paginator;
    })
  }

}
