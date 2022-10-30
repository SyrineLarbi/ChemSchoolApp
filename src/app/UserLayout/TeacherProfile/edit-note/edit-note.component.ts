import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Note } from 'src/app/Interfaces/note';
import { NoteServiceService } from 'src/app/Services/note-service.service';
import {Route,Router}  from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
id:any;
noteData:any=[];
close=false;
toggleBar=false;
searchText:any;
noteform:FormGroup;
searchBar(){
  this.close=!this.close
}
toggleBars(){
  this.toggleBar=!this.toggleBar
}
  constructor(private router:Router,private noteService:NoteServiceService, private route:ActivatedRoute) {
    this.id=route.snapshot.params["_id"];
   }

  ngOnInit(): void {
    this.getNoteDetails(this.id)
  }

  getNoteDetails(note:Note){
    return this.noteService.getNOteTeacher(note).subscribe(getData=>{
      console.log(getData)
      this.noteform= new FormGroup({
        _id:new FormControl(getData._id),
        Title_Note:new FormControl(getData.Title_Note),
        Text_Note:new FormControl(getData.Text_Note),
        Date: new FormControl(getData.Date)
      })
      this.noteData=getData
    })
  }
  updateNote(note:NoteServiceService){
    return this.noteService.updateNote(note).subscribe(update=>{
      this.noteData=update;
      this.noteform= new FormGroup({
        Title_Note:new FormControl(this.noteData.Title_Note),
        Text_Note:new FormControl(this.noteData.Text_Note),
      })
      // console.log(this.noteData)
      this.router.navigate(["/NoteTeacher"])
    })
  }
}
