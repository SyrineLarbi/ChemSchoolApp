import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teachers } from '../Interfaces/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

private APIAddTeachers="http://localhost:3001/AddTeacher";
private APIViewTeacher="http://localhost:3001/ViewTeacher";
private APIDeleteTeacher="http://localhost:3001/DeleteTeacher/";
private APIGetInfoTeacher="http://localhost:3001/getDetailsTeacher/";
private APIUpdateTeacher="http://localhost:3001/updateTeacher"
  constructor(private http:HttpClient) { }
  addTeacher(t:Teachers){
    return this.http.post(this.APIAddTeachers,t)
  }
  viewTeacher(){
  console.log("view");
  return this.http.get<any>(this.APIViewTeacher)
  }
  deleteTeacher(id:any){
  return this.http.get<any>(this.APIDeleteTeacher+id)
  }
  getInfoTeacher(id:any){
    return this.http.get<any>(this.APIGetInfoTeacher+id)
  }
  updateUser(teacher:any){
    return this.http.post(this.APIUpdateTeacher,teacher)
 }
}
