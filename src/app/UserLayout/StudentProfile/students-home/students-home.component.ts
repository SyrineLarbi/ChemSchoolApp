import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import jsPDF, { jsPDFAPI } from 'jspdf'; 
@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.css']
})
export class StudentsHomeComponent implements OnInit {
@ViewChild('content',{static:false}) el!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
makePDF(){
  let pdf= new jsPDF("p","pt","a4");
  pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
      pdf.save("demor.pdf");
    }
  });

}
}
