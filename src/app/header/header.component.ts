import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  selectedCategory:any;
  selectedTag:any;

  toggleSidebar(){
    this.dataService.showSidenav = !this.dataService.showSidenav;
  }

}
