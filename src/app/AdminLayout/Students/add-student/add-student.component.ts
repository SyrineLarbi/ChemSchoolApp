import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Students } from 'src/app/Interfaces/students';
import { StudentsService } from 'src/app/Services/students.service';
import { Route, Router } from '@angular/router';
import { UsersService } from '../../../Services/users.service';
import { Users } from '../../../Interfaces/users';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  closed=false;
  navDetails=navData;
  emailStudents:any=[];
  url="../../../assets/jennie ruby.jpg";
  constructor(private UserServ:UsersService,private route:Router, private studentsService:StudentsService) { }

  ngOnInit(): void {
    this.viewEmailT();
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

        //this.url=e.target.files[0].name;
        // console.log(this.url);
        
      }
    }
  }
  addStudentTS(S:Students){
    return this.studentsService.addStudent(S).subscribe(
      result=>{ console.log("sub correct")
      this.route.navigate(['/manageStudent'])
})

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
}
