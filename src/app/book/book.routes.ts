import { Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

export const bookRoutes: Routes = [
    { path: 'booklist', component: BooklistComponent },
    {path : 'book/:id',component : BookdetailsComponent}
];
