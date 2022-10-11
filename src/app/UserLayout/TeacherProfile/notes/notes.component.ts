import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  close=false;
  toggleBar=false;
  searchText:any;
  dateNote:any;
  date:any;
  datem:any;
  dateArray:any=[];
  // noteform:any;
  noteform:FormGroup;
  months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  constructor() { }

  ngOnInit(): void {
    // this.noteform= new FormGroup({
    //   date: new FormControl(null)
    // })
    this.getDateNote()
 

  }
  searchBar(){
    this.close=!this.close
  }
  toggleBars(){
    this.toggleBar=!this.toggleBar
  }
  getDateNote(){
    this.dateNote=new Date()
    let month=this.months[this.dateNote.getMonth()];
    let day=this.dateNote.getDate();
    let year = this.dateNote.getFullYear();
    this.dateArray.push(this.dateNote)
    this.date=`${month} ${day} ${year}`
  
    // this.dateArray.push(this.date)
    this.noteform= new FormGroup({
      title_Note:new FormControl(""),
      Text_Note:new FormControl(""),
      Date: new FormControl(this.date)
    })
    console.log(this.date)
    }
}
