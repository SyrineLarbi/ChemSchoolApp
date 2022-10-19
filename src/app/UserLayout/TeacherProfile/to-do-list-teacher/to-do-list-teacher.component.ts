import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/Interfaces/to-do';
import { TodoListService } from 'src/app/Services/todo-list.service';
import { Route,Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-to-do-list-teacher',
  templateUrl: './to-do-list-teacher.component.html',
  styleUrls: ['./to-do-list-teacher.component.css']
})
export class ToDoListTeacherComponent implements OnInit {
  close=false;
  strikethrough=false
  toggleBar=false;
  dateTime:number =Date.now();
  TodosArray:any=[];
  searchText:any;
  totalLength:any;
  page:number=1;
  itemsPerPage:number=4;
  constructor(private toDoTeacher:TodoListService, private route:Router) { }

  ngOnInit(): void {
    this.ViewtoDOTeacher();
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
addItemTS(todo:ToDo){
return this.toDoTeacher.addItem(todo).subscribe(result=>{
  this.ViewtoDOTeacher();
  console.log("done");
})
}
ViewtoDOTeacher(){
  return this.toDoTeacher.ViewTodos().subscribe(result=>{
    this.TodosArray=result
    this.totalLength= result.length;
    console.log(this.totalLength)
  })
}

deleteTodoTeacher(todo:ToDo){
  return this.toDoTeacher.deleteTodoTeacher(todo).subscribe(result=>{
    this.ViewtoDOTeacher();
  })
}

}
