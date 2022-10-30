import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Exams } from 'src/app/Interfaces/exams';
import { ExamsService } from 'src/app/Services/exams.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Interfaces/course';
import { CoursesService } from 'src/app/Services/courses.service';
import {jsPDF, jsPDFAPI } from 'jspdf';

@Component({
  selector: 'app-edit-exam',
  templateUrl: './edit-exam.component.html',
  styleUrls: ['./edit-exam.component.css']
})
export class EditExamComponent implements OnInit {
  @ViewChild ('content',{static:false}) el!:ElementRef;
id:any;
examData:any=[];
course_name:any=[];
close=false;
toggleBar=false;
searchText:any;
text:string=""
searchBar(){
  this.close=!this.close
}
toggleBars(){
  this.toggleBar=!this.toggleBar
}
  constructor(private router:Router,private examSer:ExamsService, private route:ActivatedRoute,private courseService:CoursesService) {
    this.id=route.snapshot.params["_id"];
   }

  ngOnInit(): void {
    this.viewCourse();
    this.getExam(this.id);
  }

  viewCourse(){
    return this.courseService.viewCourse().subscribe(result=>{
      for (let i=0; result.length;i++){
        var courseData=result[i]
        this.course_name.push(courseData.Name)
         console.log(this.course_name)
      }
    })
  }
  downloadPdf(){
    let pdf= new jsPDF("p",'pt',[1400,900],true);
    pdf.setFontSize(15).splitTextToSize(this.text,180);
    // var splitetext=pdf.splitTextToSize(this.text,180);
    // pdf.text(15,20,splitetext)
  
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        
        pdf.save("Exam.pdf");
      }
    })
  }
  getExam(exam:Exams){
    return this.examSer.getExam(exam).subscribe(getData=>{
      this.examData=getData
    })
  }

  updateExam(exam:ExamsService){
    return this.examSer.updateExam(exam).subscribe(update=>{
      this.examData=update;
      this.router.navigate(["/addExam"])
    })
  }
}
