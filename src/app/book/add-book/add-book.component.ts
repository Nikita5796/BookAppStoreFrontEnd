import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent implements OnInit {

  BookCategories = {};
  Book: Book = new Book();
  jsondate : Object = {};
  AddBookForm;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getCategories().subscribe(data=>{
      this.BookCategories = data;
    });

  }

  addBook() {
    var str = "assets/images/" + this.Book.title.split(' ').join('_').toLowerCase().concat(".jpeg");
    this.Book.imageUrl = str;
    this.Book.releaseDate = new Date(this.getStringDate(this.jsondate));

    let Response = this.bookService.addBook(this.Book);
    Response.subscribe((data) => {
      alert("New book added Successfully.");
      this.router.navigate(['home']);
    });

  }

  getStringDate(date : Object) : string{
    var str = "";
    var year = date['year'] ;
    var day: string = date['day'] + "";
    if (day.length == 1) {
      day = "0" + day;
    }
    str = day + "-";
    var month: string = date['month'] + "";
    if (month.length == 1) {
      month = "0" + month;
    }
    str += month + "-" + year;
    return str;

  }

}
