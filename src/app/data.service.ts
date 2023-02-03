import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  searchedThread:string = '';
  showSidenav:boolean = false;
  selectedQuestionType:string = 'All Questions';
  selectedQuestion:any;
}
