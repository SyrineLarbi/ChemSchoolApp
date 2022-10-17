import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Interfaces/course';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService:CoursesService) { }
courseTab:any=[]
  ngOnInit(): void {
    this.ViewCourseTS()
  }
ViewCourseTS(){
  return this.courseService.viewCourse().subscribe(result=>{
    this.courseTab=result;
    console.log(this.courseTab)
  })
}

}
