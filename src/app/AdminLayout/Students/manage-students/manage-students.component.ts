import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Students } from 'src/app/Interfaces/students';
import { StudentsService } from 'src/app/Services/students.service';
import { ActivatedRoute } from '@angular/router';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
  closed=false;
  navDetails=navData;
  StudentsTab:any=[];
  searchText:any;
  totalLength:any;
  page:number=1;
  itemsPerPage:number=3;
  constructor(private  studentService:StudentsService,private route:Router) { }
  ngOnInit(): void {
    this.manageStudentsTS()
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
  manageStudentsTS(){
    return this.studentService.viewStudent().subscribe(result=>{
      this.StudentsTab=result;
      this.totalLength= result.length;
    })
  }
  deleteStudents(S:StudentsService){
    return this.studentService.deleteStudent(S).subscribe(deletestudent=>{
      this.manageStudentsTS();
    })
  }
}
