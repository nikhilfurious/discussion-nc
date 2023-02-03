import { Pipe, PipeTransform } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Pipe({
  name: 'filterThreads'
})
export class FilterThreadsPipe implements PipeTransform {

  transform(value: any, searchedThread:string): any {
    return value.filter((item:any) => {
      console.log(value, searchedThread);
     if(item.title.toLowerCase().includes(searchedThread.toLowerCase())){
      return true;
     }
     return false;
    })
  }

}
