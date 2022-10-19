import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Interfaces/course';
import { CoursesService } from 'src/app/Services/courses.service';
import { navData } from 'src/app/Interfaces/nav.Details';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
  courseTab:any=[];
  closed=false;
  navDetails=navData;
  searchText:any;
  totalLength:any;
  page:number=1;
  itemsPerPage:number=3;
  constructor(private courseService:CoursesService) { }

  ngOnInit(): void {
    this.ViewCourseTS()
  }
  toggleSideBar(){
    this.closed=!this.closed
}
  ViewCourseTS(){
    return this.courseService.viewCourse().subscribe(result=>{
      this.courseTab=result;
      this.totalLength=result.length
      console.log(this.courseTab)
    })
  }
  deleteCourse(Course:CoursesService){
    return this.courseService.delete(Course).subscribe(result=>{
      this.ViewCourseTS()
    })
  }
}
