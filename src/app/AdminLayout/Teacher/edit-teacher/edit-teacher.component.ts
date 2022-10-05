import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/SuperAdminLayout/add-users/nav.Details';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  closed=false;
  navDetails=navData;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.closed=!this.closed
  }
}
