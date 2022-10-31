import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route,Router } from '@angular/router';
import { NoteServiceService } from 'src/app/Services/note-service.service';
import { Note } from 'src/app/Interfaces/note';


@Component({
  selector: 'app-note-students',
  templateUrl: './note-students.component.html',
  styleUrls: ['./note-students.component.css']
})
export class NoteStudentsComponent implements OnInit {
  close=false;
  toggleBar=false;
  searchText:any;
  dateNote:any;
  date:any;
  datem:any;
  NotesData:any;
  dateArray:any=[];
  notetest:any;
  page:number=1;
  totalLength:any;
  itemsPerPage:number=4;
  noteform:FormGroup;
  months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  constructor(private notes:NoteServiceService, private route:Router) {   this.getDateNote() }
  ngOnInit(): void {
    this.noteform= new FormGroup({
      Title_Note:new FormControl(""),
      Text_Note:new FormControl(""),
      Date: new FormControl(this.date)
    })
 
    this.ViewNoteStudent()
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
    }
    addItemTS(note:Note){
      return this.notes.addNoteStudents(note).subscribe(result=>{
        window.location.reload()
      })
      }
      ViewNoteStudent(){
        return this.notes.viewNotesStudents().subscribe(result=>{
          this.NotesData=result;
        })
      }
      deleteNoteTS(note:Note){
        return this.notes.deleteNoteStudents(note).subscribe(result=>{
          this.ViewNoteStudent();
        })
      }
}
