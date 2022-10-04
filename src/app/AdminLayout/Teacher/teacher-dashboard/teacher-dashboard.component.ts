import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/SuperAdminLayout/add-users/nav.Details';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  closed=false;
  navDetails=navData;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
}
