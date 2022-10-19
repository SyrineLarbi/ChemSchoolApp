import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Teachers } from '../../../Interfaces/teachers';
import { TeachersService } from '../../../Services/teachers.service';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../../Services/AuthService/auth.service';
import { UsersService } from '../../../Services/users.service';
import { Users } from '../../../Interfaces/users';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  closed=false;
  navDetails=navData;
  EmailTeachers:any=[]
  constructor(private authentification:AuthService, private UserServ:UsersService, private teacherSrv:TeachersService, private route:Router) { }

  ngOnInit(): void {
    this.viewEmailT();
  }
  url="../../../assets/jennie ruby.jpg";


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


  addTeacherTS(t:Teachers){
  return this.teacherSrv.addTeacher(t).subscribe(
    result=>{ console.log("sub correct")
    this.route.navigate(['/viewTeacher'])
  }
  )
  }
  // logOut(){
  //   return this.authentification.logOut().subscribe(result=>{
  //     localStorage.removeItem('userRole');
  //     this.route.navigate([""])
  //   })
  // }
  viewEmailT(){
    return this.UserServ.ViewUser().subscribe(emailTeacher=>{
      // var email=emailTeacher.Email;
      // this.EmailTeachers=emailTeacher
      // console.log(emailTeacher)
      for(let i=0; i<= emailTeacher.length; i++){
        if(emailTeacher[i].Role=="Teacher"){
          var Teachers=emailTeacher[i]
          this.EmailTeachers.push(Teachers.Email)
        }
        
      }
      // console.log(this.EmailTeachers)
    })
  }


}
