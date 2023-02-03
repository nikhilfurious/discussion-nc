import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-mobile-sidenav',
  templateUrl: './mobile-sidenav.component.html',
  styleUrls: ['./mobile-sidenav.component.scss']
})
export class MobileSidenavComponent implements OnInit {

  showQuestionsSubMenus: boolean = true;
  showPostsSubMenus: boolean = false;
  questionsHeight: number = 122;
  postsHeight: number = 0;

  opacity: number = 0;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  toggleQuestionOptions() {
    this.showQuestionsSubMenus = !this.showQuestionsSubMenus;
    if (!this.questionsHeight) {
      this.increaseQuestionsHeight();
    }
    else {
      this.decreaseQuestionsHeight();
    }
  }

  increaseQuestionsHeight() {
    setTimeout(() => {
      if (this.questionsHeight < 122) {
        this.questionsHeight++;
        this.increaseQuestionsHeight();
      }
    }, 2);
  }

  decreaseQuestionsHeight() {
    setTimeout(() => {
      if (this.questionsHeight > 0) {
        this.questionsHeight--;
        this.decreaseQuestionsHeight();
      }
    }, 2);
  }

  togglePostsOptions() {
    this.showPostsSubMenus = !this.showPostsSubMenus;
    if (!this.postsHeight) {
      this.increasePostsHeight();
    }
    else {
      this.decreasePostsHeight();
    }
  }

  increasePostsHeight() {
    setTimeout(() => {
      if (this.postsHeight < 122) {
        this.postsHeight++;
        this.increasePostsHeight();
      }
    }, 2);
  }

  decreasePostsHeight() {
    setTimeout(() => {
      if (this.postsHeight > 0) {
        this.postsHeight--;
        this.decreasePostsHeight();
      }
    }, 2);
  }

  selectedQuestionType(type:string){
    console.log(type);
    this.dataService.selectedQuestionType = type;
  }

}
