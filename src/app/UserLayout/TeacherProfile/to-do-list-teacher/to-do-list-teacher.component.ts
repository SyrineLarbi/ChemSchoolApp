import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-teacher',
  templateUrl: './to-do-list-teacher.component.html',
  styleUrls: ['./to-do-list-teacher.component.css']
})
export class ToDoListTeacherComponent implements OnInit {
  close=false;
  toggleBar=false;
  constructor() { }

  ngOnInit(): void {
  }
  searchBar(){
    this.close=!this.close
  }
  toggleBars(){
    this.toggleBar=!this.toggleBar
    console.log('rg')
  }
}
