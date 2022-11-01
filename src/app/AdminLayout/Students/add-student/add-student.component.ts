import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Students } from 'src/app/Interfaces/students';
import { StudentsService } from 'src/app/Services/students.service';
import { Route, Router } from '@angular/router';
import { UsersService } from '../../../Services/users.service';
import { Users } from '../../../Interfaces/users';
import { Course } from 'src/app/Interfaces/course';
import { CoursesService } from 'src/app/Services/courses.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  form:FormGroup
  closed=false;
  navDetails=navData;
  emailStudents:any=[];
  courseData:any=[]
  em:any=[];
  url="../../../assets/jennie ruby.jpg";
  dropdownList=[];
  selectedItems = [];
  dropdownSettings:any = {};
  course:any=[]
  crou:any;
  tr
  constructor(private formBuilder:FormBuilder, private UserServ:UsersService,private route:Router, private studentsService:StudentsService, private courseServ:CoursesService) {   }

  ngOnInit(): void {
    this.verifEmail();
    this.getCourese();
    this.initform()
      this.dropdownList = this.test();
      this.dropdownSettings={
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    }; 
  }
  test():Array<any>{
    this.crou=localStorage.getItem("courseData")
     return this.tr=JSON.parse(this.crou)
  }
  initform(){
this.form=this.formBuilder.group({
  First_name:[""],
  Last_name:[""],
  Gender:[""],
  course:[""],
  Email:[""],
})
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
  selectFile(e:any){
    if(e.target.files){
      let toRead=new FileReader();
      toRead.readAsDataURL(e.target.files[0]);
      toRead.onload=(event:any)=>{
        this.url=event.target.result;
        
      }
    }
  }
  addStudentTS(S:Students){
    return this.studentsService.addStudent(S).subscribe(
      result=>{ console.log("sub correct")
      this.route.navigate(['/manageStudent'])
})

}
onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}
viewEmailT(){
  return this.UserServ.ViewUser().subscribe(email=>{
    // var email=emailTeacher.Email;
    // this.EmailTeachers=emailTeacher
    // console.log(emailTeacher)
    for(let i=0; i<= email.length; i++){
      if(email[i].Role=="Student"){
        var students=email[i]
        this.emailStudents.push(students.Email)
      }
      
    }
  })
}
verifEmail(){
  this.viewEmailT();
  return this.studentsService.viewStudent().subscribe(result=>{
    for(let j=0 ; j<= result.length;j++){
      this.em=result[j].Email
      // console.log(this.EmailTeachers)
      this.emailStudents.forEach(emai => {
        console.log('g')
        if(emai==this.em){
          var index = this.emailStudents.indexOf(emai)
          // console.log(index)
          this.emailStudents.splice(index,1)
        }
      });
    }
  })
}
getCourese(){
  return this.courseServ.viewCourse().subscribe(resul=>{
    for(let i=0; i<=resul.length;i++){
      this.courseData.push(resul[i]);
      this.course=this.courseData.map(({_id,Name})=>({item_id:_id,item_text:Name}))
      let t=JSON.stringify(this.course)
      // console.log(t)
      localStorage.setItem("courseData",t);
    }
  })
}


}
