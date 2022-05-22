import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BooksSidebarComponent } from './books-sidebar/books-sidebar.component';
import { BooksListComponent } from './books-list/books-list.component';


@NgModule({
  declarations: [
    BooksComponent,
    BooksSidebarComponent,
    BooksListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
