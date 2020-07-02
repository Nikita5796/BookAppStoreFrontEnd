import { Component, destroyPlatform, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get the route parameter
    this.route.paramMap.subscribe((map: ParamMap) => {
      const category = map.get('category');
      console.log(category);

      // Call bookservice to get all books of specific category

      this.bookService.getAllBooksByCategory(category).subscribe((data) => {
        console.log(data);
        this.books = data;
      });
    });
  }
}
