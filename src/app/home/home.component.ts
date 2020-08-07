import { Component } from '@angular/core';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) { }

  ngOnInit() { }

  logOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
