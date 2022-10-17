import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Route,Router } from '@angular/router';
import { Teachers } from 'src/app/Interfaces/teachers';
import { TeachersService } from 'src/app/Services/teachers.service';
import { ThisReceiver } from '@angular/compiler';
import { Course } from 'src/app/Interfaces/course';
import { CoursesService } from 'src/app/Services/courses.service';



@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  closed=false;
  navDetails=navData;
  TeacherData:any=[];
  TeacherName:any;
  Names=[];
  

  constructor(private teacherService:TeachersService, private courseService:CoursesService, private route:Router) { }
 
  ngOnInit(): void {
    this.viewTeacher_name()
   
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
  viewTeacher_name(){
    return this.teacherService.viewTeacher().subscribe(teacher=>{
      for (let i=0; i<= teacher.length;i++){
        this.TeacherData=teacher[i];
        this.TeacherName=this.TeacherData.First_name+ " "+this.TeacherData.Last_name
        this.Names.push(this.TeacherName);
        // this.Names=JSON.stringify(this.TeacherName)
        console.log( this.Names)
      }
    })
  }
  addCourseTS(course:Course){
    return this.courseService.addCourse(course).subscribe(result=>{
      this.route.navigate(["/ViewCourse"]);
    })
  }
  

}
