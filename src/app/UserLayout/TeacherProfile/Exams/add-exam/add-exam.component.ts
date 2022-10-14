import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
close=false;
toggleBar=false;
  searchText:any;
  constructor() { }

  ngOnInit(): void {
  }
  searchBar(){
    this.close=!this.close
  }
  toggleBars(){
    this.toggleBar=!this.toggleBar
  }
}
