import { Component, OnInit } from '@angular/core';
import {faUser, faLock, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Route,Router } from '@angular/router';
import { Auth } from '../../Services/AuthService/auth';
import { AuthService } from '../../Services/AuthService/auth.service';
import { Users } from '../../Interfaces/users';

@Component({
  selector: 'app-log-in-admin',
  templateUrl: './log-in-admin.component.html',
  styleUrls: ['./log-in-admin.component.css']
})
export class LogInAdminComponent implements OnInit {
  faUser=faUser;
  faPassword=faLock;
  fahide=faEyeSlash;
  messageAuthError:any;
  data:any=[]
  error=false
  constructor(private router:Router,private user:AuthService) { }

  ngOnInit(): void {
 
  }
  checkRole(){
    let role=localStorage.getItem("userRole")
    switch (role) {
      case "SuperAdmin":
        this.router.navigate(['/Dashboard'])
        break;
      case "Admin":
        this.router.navigate(['/AdminDashboard'])
        break;
      case "Teacher":
        this.router.navigate(['/TeacherHome'])
        break;
      case "Student":
        this.router.navigate(['/StudentsHome'])
        break;
      default:
        this.router.navigate(['']);
        this.error=!this.error
       console.log("rrrr");
       break;
    }
  }
  LogInTS(users:Auth){
  return this.user.logIn(users).subscribe(result=>{
  this.data=result;
  localStorage.setItem('teacherEmailsaved',this.data.Email)
  localStorage.setItem('userRole',this.data.Role)
  this.checkRole();
})
  }
}
