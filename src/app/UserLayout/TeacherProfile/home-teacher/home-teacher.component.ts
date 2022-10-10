import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.css']
})
export class HomeTeacherComponent implements OnInit {
  close=false;
  toggleBar=false;
  dateTime:number =Date.now();
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
