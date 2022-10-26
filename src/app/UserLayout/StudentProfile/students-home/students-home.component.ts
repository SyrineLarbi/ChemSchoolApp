import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Students } from 'src/app/Interfaces/students';
@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.css']
})
export class StudentsHomeComponent implements OnInit {
  close=false;
  toggleBar=false;
  dateTime:number =Date.now();
  studentFName:any
  studentLName:any
  studentName:any
  studentData:any=[]
  studentEmail:any=[]
  constructor(private studentService:StudentsService) { }

  ngOnInit(): void {
    this.ViewteacherName()
  }
  searchBar(){
    this.close=!this.close
  }
  toggleBars(){
    this.toggleBar=!this.toggleBar
    console.log('rg')
  }
  ViewteacherName(){
    return this.studentService.viewStudent().subscribe(result=>{
      var email:any;
      email=localStorage.getItem("teacherEmailsaved");
      console.log(result)
      for (let i=0; i<=result.length;i++){
        this.studentData=result[i];
        this.studentEmail=this.studentData.Email
        console.log(this.studentEmail +"eee")
        switch (this.studentEmail) {
          case email:
            console.log('ff')
           this.studentFName =this.studentData.First_name
           this.studentLName=this.studentData.Last_name
           this.studentName= (`${this.studentFName}  ${ this.studentLName}`)
            console.log( this.studentFName)
            break;
        
          default:
            console.log('nnnnnn')
            break;
        }
        
      }

    })
  }




}
