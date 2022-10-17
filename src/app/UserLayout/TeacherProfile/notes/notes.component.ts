import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route,Router } from '@angular/router';
import { NoteServiceService } from 'src/app/Services/note-service.service';
import { Note } from 'src/app/Interfaces/note';

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
  NotesData:any;
  dateArray:any=[];
  notetest:any;
  noteform:FormGroup;
  months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  constructor(private notes:NoteServiceService, private route:Router) {   this.getDateNote() }

  ngOnInit(): void {
    this.noteform= new FormGroup({
      Title_Note:new FormControl(""),
      Text_Note:new FormControl(""),
      Date: new FormControl(this.date)
    })
 
    this.ViewNoteTeacher()
//  console.log(this.date +"d")

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
    
    // console.log(this.date)
    }
    addItemTS(note:Note){
      return this.notes.addNote(note).subscribe(result=>{
        console.log("done");
        this.ViewNoteTeacher()
        console.log(this.date)
      })

      }
      ViewNoteTeacher(){
        return this.notes.viewNotes().subscribe(result=>{
          this.NotesData=result;
          // this.totalLength= result.length;
          // console.log(this.totalLength)
        })
      }
      deleteNoteTS(note:Note){
        return this.notes.deleteNoteT(note).subscribe(result=>{
          this.ViewNoteTeacher();
        })
      }
      
}
