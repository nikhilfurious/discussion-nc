import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LatestComponent } from './latest/latest.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FilterThreadsPipe } from './filter-threads.pipe';
import { MobileSidenavComponent } from './mobile-sidenav/mobile-sidenav.component';
import { FilterQuestionTypePipe } from './filter-question-type.pipe';
import { QuestionDetailComponent } from './question-detail/question-detail.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LatestComponent,
    SidenavComponent,
    FilterThreadsPipe,
    MobileSidenavComponent,
    FilterQuestionTypePipe,
    QuestionDetailComponent
  ],
  imports: [
    // AngularEditorModule,
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTabsModule,
    NzIconModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzSelectModule,
    NzInputModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
