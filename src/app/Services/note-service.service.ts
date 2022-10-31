import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../Interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
        /*API Note Teacher*/
  private APIAddNoteTeacher="http://localhost:3001/Add_Note_Teacher";
  private APIViewNote="http://localhost:3001/ViewNote_Teacher";
  private APIDeleteNoteTeacher="http://localhost:3001/DeleteNoteTeacher/";
  private APIGetNoteTeacher="http://localhost:3001/getNoteTeacher/";
  private APIUpdateNote="http://localhost:3001/updateNoteTeacher";
    /*API Note Student*/
    private APIAddNoteStudent="http://localhost:3001/Add_Note_Student";
    private APIViewNoteStudent="http://localhost:3001/ViewNote_Student";
    private APIDeleteNoteStudent="http://localhost:3001/DeleteNoteStudent/";
    private APIGetNoteStudent="http://localhost:3001/getNoteStudent/";
    private APIUpdateStudent="http://localhost:3001/updateNoteStudent";



  constructor(private http:HttpClient) { }
              /*Teacher*/
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
    updateNote(note:any){
      return this.http.post(this.APIUpdateNote,note)
   }
        /*Students*/
  addNoteStudents(note:Note){
    return this.http.post(this.APIAddNoteStudent,note)
  }
  viewNotesStudents(){
    console.log("view");
    return this.http.get<any>(this.APIViewNoteStudent)
    }
    deleteNoteStudents(id:any){
      return this.http.get<any>(this.APIDeleteNoteStudent+id)
    }
    getNOteStudents(id:any){
      return this.http.get<any>(this.APIGetNoteStudent+id)
    } 
    updateNoteStudents(note:any){
      return this.http.post(this.APIUpdateStudent,note)
    }
  }
