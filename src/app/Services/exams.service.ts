import { Injectable } from '@angular/core';
import { Exams } from '../Interfaces/exams';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  private APIAddExam="http://localhost:3001/AddExams";
  private APIViewExam="http://localhost:3001/ViewExams";
  private APIDeleteExam="http://localhost:3001/DeleteExam/"
  private APIGetExam="http://localhost:3001/getExams/";
  private APIEditExam="http://localhost:3001/updateExams";

  constructor(private http:HttpClient) { }
  addExam(exam:Exams){
    return this.http.post(this.APIAddExam,exam)
  }
  viewExam(){
    return this.http.get<any>(this.APIViewExam)
  }
  deleteExam(id:any){
    return this.http.get<any>(this.APIDeleteExam+id)
  }
  getExam(id:any){
    return this.http.get<any>(this.APIGetExam+id)
  } 
  updateExam(Exam:any){
    return this.http.post(this.APIEditExam,Exam)
 }
}
