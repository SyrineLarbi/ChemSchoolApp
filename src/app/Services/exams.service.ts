import { Injectable } from '@angular/core';
import { Exams } from '../Interfaces/exams';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  private APIAddExam="http://localhost:3001/AddExams";
  private APIViewExam="http://localhost:3001/ViewExams";
  constructor(private http:HttpClient) { }
  addCourse(exam:Exams){
    
  }
}
