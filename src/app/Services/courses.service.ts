import { Injectable } from '@angular/core';
import { Course } from '../Interfaces/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private APIAddCourse="http://localhost:3001/Add_Course"
  private APIViewCourse="http://localhost:3001/View_Course"
  private APIDeleteCourse="http://localhost:3001/DeleteCourse/"

  constructor(private http:HttpClient) { }
  addCourse(course:Course){
    return this.http.post(this.APIAddCourse,course)
  }
  viewCourse(){
    return this.http.get<any>(this.APIViewCourse)
  }
  delete(id:any){
    return this.http.get<any>(this.APIDeleteCourse+id)
  }
}
