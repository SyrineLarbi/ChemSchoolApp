import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Interfaces/course';
import { CoursesService } from 'src/app/Services/courses.service';


@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
  courseTab:any=[]
  constructor(private courseService:CoursesService) { }

  ngOnInit(): void {
    this.ViewCourseTS()
  }
  ViewCourseTS(){
    return this.courseService.viewCourse().subscribe(result=>{
      this.courseTab=result;
      console.log(this.courseTab)
    })
  }
  deleteCourse(Course:CoursesService){
    return this.courseService.delete(Course).subscribe(result=>{
      this.ViewCourseTS()
    })
  }
}
