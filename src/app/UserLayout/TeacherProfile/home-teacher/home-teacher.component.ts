import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/Services/teachers.service';
import { Teachers } from 'src/app/Interfaces/teachers';
@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.css']
})
export class HomeTeacherComponent implements OnInit {
  close=false;
  Bar=false;
  dateTime:number =Date.now();
  teacherFName:any
  teacherLName:any
  teacherName:any
  teacherData:any=[]
  teacherEmail:any=[]
  constructor(private teacherService:TeachersService) { }

  ngOnInit(): void {
    this.ViewteacherName()
    this.toggleBars()
  }
  searchBar(){
    this.close=!this.close
   
  }
  toggleBars(){
    this.Bar=!this.Bar
  }
  ViewteacherName(){
    return this.teacherService.viewTeacher().subscribe(result=>{
      var email:any;
      email= localStorage.getItem("teacherEmailsaved");
      for (let i=0; i<=result.length;i++){
        this.teacherData=result[i];
        this.teacherEmail=this.teacherData.Email
        // console.log(this.teacherEmail)
        switch (this.teacherEmail) {
          case email:
           console.log('ff')
           this.teacherFName =this.teacherData.First_name
           this.teacherLName=this.teacherData.Last_name
           this.teacherName= (`${this.teacherFName}  ${ this.teacherLName}`)
            console.log(this.teacherName)
            break;
          default:
            console.log('nnnnnn')
            break;
        }
      }
    })
  }
}
