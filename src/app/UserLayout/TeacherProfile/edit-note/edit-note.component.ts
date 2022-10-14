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
      this.noteData=getData
    })
  }
}
