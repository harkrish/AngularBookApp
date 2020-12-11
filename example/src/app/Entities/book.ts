export class Book {
    bookId : number = 0;
    title : string = "The Ramayana"
    author : string ="Shri Valmiki"
    price : number = 600;
    image : string = "";
     
    constructor(id: number, title:string, author : string, price : number, img : string) {
        this.bookId =id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.image =  img;
    }
}