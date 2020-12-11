import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../Entities/book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: Array<Book>, arg: string):Array<Book> {
    if(arg == "")
      return input;
    else
    return input.filter((bk=>bk.title.includes(arg)));
  }

}