import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterQuestionType'
})
export class FilterQuestionTypePipe implements PipeTransform {

  date:any = new Date();
  transform(value: any, questionType: string): any {

    if(questionType === 'All Questions'){
      return value;
    }
    else if(questionType === 'Recent Questions'){
      value = value.filter((item:any) => Math.floor((Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()) - Date.UTC(new Date(item.createdTime).getFullYear(), new Date(item.createdTime).getMonth(), new Date(item.createdTime).getDate()) ) /(1000 * 60 * 60 * 24)) < 30);
      return value;
    }
    else if(questionType === 'Most Viewed Questions'){
      value = value.filter((item:any) => item.views > 20);
      return value;
    }
    else{
      value = value.filter((item:any) => item.answers > 20);
      return value;
    }
  }
}
