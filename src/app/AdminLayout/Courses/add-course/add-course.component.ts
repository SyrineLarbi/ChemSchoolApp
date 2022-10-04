import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/SuperAdminLayout/add-users/nav.Details';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  closed=false;
  navDetails=navData;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
}
