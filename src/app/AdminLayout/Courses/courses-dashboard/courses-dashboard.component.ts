import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html',
  styleUrls: ['./courses-dashboard.component.css']
})
export class CoursesDashboardComponent implements OnInit {

  constructor() { }
  closed=false;
  navDetails=navData;
  ngOnInit(): void {
  }
  toggleSideBar(){
    this.closed=!this.closed
}
}
