import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../Interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private APIAddNoteTeacher="http://localhost:3001/Add_Note_Teacher";
  private APIViewNote="http://localhost:3001/ViewNote_Teacher";
  private APIDeleteNoteTeacher="http://localhost:3001/DeleteNoteTeacher/";
  private APIGetNoteTeacher="http://localhost:3001/getNoteTeacher/"
  constructor(private http:HttpClient) { }
  addNote(note:Note){
    return this.http.post(this.APIAddNoteTeacher,note)
  }
  viewNotes(){
    console.log("view");
    return this.http.get<any>(this.APIViewNote)
    }
    deleteNoteT(id:any){
      return this.http.get<any>(this.APIDeleteNoteTeacher+id)
    }
    getNOteTeacher(id:any){
      return this.http.get<any>(this.APIGetNoteTeacher+id)
    } 
    // updateUser(teacher:any){
      // return this.http.post(this.APIUpdateTeacher,teacher)
   }

