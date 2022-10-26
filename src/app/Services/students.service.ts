import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../Interfaces/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private APIAddStudent="http://localhost:3001/AddStudent";
  private APIViewStudent="http://localhost:3001/ViewStudent";
  private APIDeleteStudent="http://localhost:3001/DeleteStudent/";
  
  constructor(private http:HttpClient) { }
  addStudent(S:Students){
    return this.http.post(this.APIAddStudent,S)
  }
  viewStudent(){
    console.log("view");
    return this.http.get<any>(this.APIViewStudent)
    }
  deleteStudent(id:any){
    return this.http.get<any>(this.APIDeleteStudent+id)
    }
    
}
