import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Route,Router } from '@angular/router';
import { Teachers } from '../../../Interfaces/teachers';
import { TeachersService } from '../../../Services/teachers.service';
@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {
  closed=false;
  navDetails=navData;
  public cards:any=[];
  image:any;
  constructor(private teacherServ:TeachersService, private route:Router) { }

  ngOnInit(): void {
    this.viewTeacherTS()
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
  viewTeacherTS(){
    return this.teacherServ.viewTeacher().subscribe(result=>{
      // console.log(result)
      this.cards=result;
    })
  }
}
