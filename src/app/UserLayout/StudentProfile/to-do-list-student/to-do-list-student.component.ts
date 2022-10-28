import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/Interfaces/to-do';
import { TodoListService } from 'src/app/Services/todo-list.service';
import { Route,Router } from '@angular/router';



@Component({
  selector: 'app-to-do-list-student',
  templateUrl: './to-do-list-student.component.html',
  styleUrls: ['./to-do-list-student.component.css']
})
export class ToDoListStudentComponent implements OnInit {
  close=false;
  strikethrough=false
  toggleBar=false;
  dateTime:number =Date.now();
  TodosArray:any=[];
  searchText:any;
  totalLength:any;
  page:number=1;
  itemsPerPage:number=4;
  constructor(private toDoStudent:TodoListService, private route:Router) { }

  ngOnInit(): void {
  }
  searchBar(){
    this.close=!this.close
  }
  toggleBars(){
    this.toggleBar=!this.toggleBar
    console.log('rg')
  }
  stirke(){
    this.strikethrough=!this.strikethrough
  }
  addItemStudentTS(todo:ToDo){
    return this.toDoStudent.addItemStudent(todo).subscribe(result=>{
      this.ViewtoDOTeacher();
      console.log("done");
    })
    }
    ViewtoDOTeacher(){
      return this.toDoStudent.ViewTodosStudents().subscribe(result=>{
        this.TodosArray=result
        this.totalLength= result.length;
        console.log(this.totalLength)
      })
    }
    deleteTodoTeacher(todo:ToDo){
      return this.toDoStudent.deleteTodoTeacher(todo).subscribe(result=>{
        this.ViewtoDOTeacher();
      })
    }
}
