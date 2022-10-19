import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Course } from 'src/app/Interfaces/course';
import { CoursesService } from 'src/app/Services/courses.service';
import {jsPDF, jsPDFAPI } from 'jspdf';
import { Exams } from 'src/app/Interfaces/exams';
import { ExamsService } from 'src/app/Services/exams.service';
import { Route,Router } from '@angular/router';


@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
  @ViewChild ('content',{static:false}) el!:ElementRef;
close=false;
toggleBar=false;
searchText:any;
course_name:any=[]
totalLength:any;
examData:any=[]
  page:number=1;
  itemsPerPage:number=4;
  constructor(private courseService:CoursesService,private router:Router, private examservice:ExamsService) { }
  text:string=""
  ngOnInit(): void {
    this.viewCourse();
    this.viewExam();
  }
  searchBar(){
    this.close=!this.close
  }
  toggleBars(){
    this.toggleBar=!this.toggleBar
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
addExamTS(exam:Exams){
  return this.examservice.addExam(exam).subscribe(result=>{
  //  window.location.reload()
    this.viewExam();
  })
}
viewExam(){
  return this.examservice.viewExam().subscribe(result=>{
this.examData=result
this.totalLength=result.length
  })
}
deleteExamTS(exam:ExamsService){
  return this.examservice.deleteExam(exam).subscribe(result=>{
    this.viewExam();
  })
}
}
