import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Entities/book';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent implements OnInit {
  books : Array<Book>;
  imgSrc: string = "/assets/images/";
  selectedBook : Book = null;
  byTitle : string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.books = new Array<Book>();
    this.books.push(new Book(111, "A Suitable Boy", "Vikram Seth", 600, this.imgSrc + "suitableboy.jpeg"));
    this.books.push(new Book(112, "The Ramayana", "Valmiki", 500, this.imgSrc + "ramayan.jpeg"));
    this.books.push(new Book(113, "The Discovery of India", "Jawaharlal Nehru", 700, this.imgSrc + "DOI.jpeg"));
    this.books.push(new Book(114, "The Mahabharatha", "Shri Vedavyasa", 450, this.imgSrc + "Mahabharatha.jpeg"));
  }

  getBook(id: number) 
  {
    this.selectedBook = this.books.find((bk)=>bk.bookId == id);
  }

  onSave(){
    for (let index = 0; index < this.books.length; index++) {
      if(this.books[index].bookId == this.selectedBook.bookId){
        const element = this.books[index];
        element.bookId = this.selectedBook.bookId;
        element.title = this.selectedBook.title;
        element.price = this.selectedBook.price;
        element.author = this.selectedBook.author;
      }
    }
  }
}
