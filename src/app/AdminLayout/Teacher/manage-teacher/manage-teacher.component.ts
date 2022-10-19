import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Teachers } from '../../../Interfaces/teachers';
import { TeachersService } from '../../../Services/teachers.service';
import { ActivatedRoute } from '@angular/router';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.css']
})
export class ManageTeacherComponent implements OnInit {
  closed=false;
  navDetails=navData;
  teacherTab:any=[];
  searchText:any;
  totalLength:any;
  page:number=1;
  itemsPerPage:number=3;
  constructor(private teacherServ:TeachersService,private route:Router) { }

  ngOnInit(): void {
    this.manageTeacherTS();
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
  manageTeacherTS(){
    return this.teacherServ.viewTeacher().subscribe(result=>{
      this.teacherTab=result;
      this.totalLength= result.length;
    })
  }
  deleteTeacherTS(t:TeachersService){
    return this.teacherServ.deleteTeacher(t).subscribe(deleteTeache=>{
      this.manageTeacherTS();
    })
  }
}
