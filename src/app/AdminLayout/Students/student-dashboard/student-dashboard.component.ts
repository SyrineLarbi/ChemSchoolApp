import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  closed=false;
  navDetails=navData;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
}
