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
  toggleBar=false;
  dateTime:number =Date.now();
  teacherFName:any
  teacherLName:any
  teacherName:any
  teacherData:any=[]
  teacherEmail:any=[]
  constructor(private teacherService:TeachersService) { }

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
    return this.teacherService.viewTeacher().subscribe(result=>{
      var email
      email= localStorage.getItem("teacherEmailsaved");
      console.log(email)
      for (let i=0; i<=result.length;i++){
        this.teacherData=result[i];
        this.teacherEmail=this.teacherData.Email
        
        switch (this.teacherEmail) {
          case email:
            console.log('ff')
           this.teacherFName =this.teacherData.First_name
           this.teacherLName=this.teacherData.Last_name
           this.teacherName= (`${this.teacherFName}  ${ this.teacherLName}`)
            console.log( this.teacherFName)
            break;
        
          default:
            console.log('nnnnnn')
            break;
        }
        
      }

    })
  }
}
