import { Component, OnInit,ViewChild } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Users } from 'src/app/Interfaces/users';
import { UsersService } from 'src/app/Services/users.service';
import { Route,Router } from '@angular/router';
import { Chart,registerables } from 'chart.js';
import { read } from 'fs';
import { TeachersService } from 'src/app/Services/teachers.service';
import { StudentsService } from 'src/app/Services/students.service';
import { CoursesService } from 'src/app/Services/courses.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  closed=false;
  teachers:any=[]
  navDetails=navData;
  teacherdata:any=[]
  constructor(private UserServ:UsersService, private route:Router, private teacherserv:TeachersService,private studentServ:StudentsService, private courseServi:CoursesService) { }
  EmailTeachers:any=[];
  data:any;
  courseData:any=[]
  courseNumber:any
  chart:any;
  teachernumber:any
  studentNumber:any;
  studentData:any=[]
  canvas:any;
  ctx:any;
  @ViewChild('mychart') mychart:any;
  studentCounter:number=0;
  usersCounter:number=0;
  TeacherCounter:number=0;
  ngOnInit(): void {
    this.viewEmailT()
    this.countTeacher()
    this.chart=document.getElementById("myChart")
    Chart.register(...registerables);
    this.loadChart();
    this.teacherUser();
    this.Courses();
    this.studentUser();
    this.countStudent();
    this.countCourse();
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
  viewEmailT(){
    return this.UserServ.ViewUser().subscribe(emailTeacher=>{
      for(let i=0; i<= emailTeacher.length; i++){
        if(emailTeacher[i].Role=="Teacher"){
           this.teachers=emailTeacher[i]
           this.data= this.EmailTeachers.push(this.teachers);
        }
      } 
    })
}
countTeacher(){
  var usercountStop:any;
  // console.log(this.EmailTeachers)
  usercountStop=setInterval(()=>{
    this.TeacherCounter++;
    if(this.TeacherCounter==this.teachernumber)
    {
     clearInterval(usercountStop);
    }
   },50)
}
countStudent(){
  var usercountStop:any;
  usercountStop=setInterval(()=>{
    this.studentCounter++;
    if(this.studentCounter==this.studentNumber)
    {
     clearInterval(usercountStop);
    }
   },50)
}
countCourse(){
  var usercountStop:any;
  usercountStop=setInterval(()=>{
    this.usersCounter++;
    if(this.usersCounter== this.courseNumber)
    {
     clearInterval(usercountStop);
    }
   },50)
}
loadChart(){
  let teacher=localStorage.getItem("teachnumber");
  let student=localStorage.getItem("studentNumber");
  let course=localStorage.getItem("coursenumber");
  new Chart(this.chart,{
    type:'bar',
    data: {
      datasets:[{
        data:[teacher,student,course],
        label:"Users",
        barPercentage:0.5,
        barThickness:30,
        borderColor:'black',
        backgroundColor	:'rgba(0, 0, 0, 0.8)',
        borderRadius:5,
        hoverBackgroundColor:'rgba(0, 0, 0, 0.6)'
      },],
      labels:[
        "Teacher","students","courses"
      ],
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      scales:{
        y:{
          beginAtZero:true,
        }
      }
    }
  })
}
teacherUser(){
  return this.teacherserv.viewTeacher().subscribe(result=>{
    for (let i=0; i<=result.length;i++){
      this.teacherdata.push(result[i].Email)
      this.teachernumber=this.teacherdata.length
      localStorage.setItem("teachnumber",this.teachernumber);
    }
  })
}
studentUser(){
  return this.studentServ.viewStudent().subscribe(result=>{
    for (let i=0; i<=result.length;i++){
      this.studentData.push(result[i].Email)
      this.studentNumber=this.studentData.length
      localStorage.setItem("studentNumber",this.studentNumber)
    }
  })
}
Courses(){
  return this.courseServi.viewCourse().subscribe(result=>{
    for (let i=0; i<=result.length;i++){
      this.courseData.push(result[i].Name)
      this.courseNumber=this.courseData.length
      localStorage.setItem("coursenumber",this.courseNumber)
    }
  })
}
}
