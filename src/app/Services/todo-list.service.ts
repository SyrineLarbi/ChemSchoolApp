import { Injectable } from '@angular/core';
import { ToDo } from '../Interfaces/to-do';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private APIAddToDoListTeacher="http://localhost:3001/AddToDolist_Teacher";
  private APIViewToDoListTeacher="http://localhost:3001/ViewtodoList_Teacher";
  private APIDeleteToDOListTeacher="http://localhost:3001/DeleteToDoTeacher/";
  private APIAddToDoListStudent="http://localhost:3001/AddToDolist_Student";
  private APIViewToDoListStudent="http://localhost:3001/ViewtodoList_Student";
  constructor(private http:HttpClient) { }
  ViewTodos(){
  return this.http.get<any>(this.APIViewToDoListTeacher)
  }
  addItem(todo:ToDo){
   return this.http.post(this.APIAddToDoListTeacher,todo)
  }
  deleteTodoTeacher(id:any){
    return this.http.get<any>(this.APIDeleteToDOListTeacher+id)
  }
  addItemStudent(todo:ToDo){
    return this.http.post(this.APIAddToDoListStudent,todo)
   }
   ViewTodosStudents(){
    return this.http.get<any>(this.APIViewToDoListStudent)
    }
}
