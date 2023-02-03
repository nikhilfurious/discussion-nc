import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionDetailComponent } from './component/question-detail/question-detail.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'question-details',component:QuestionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
