import { Component, OnInit } from '@angular/core';
import {faUser, faLock, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Route,Router } from '@angular/router';
import { Auth } from '../../AdminLayout/AuthService/auth';
import { AuthService } from '../../AdminLayout/AuthService/auth.service';
import { Users } from '../../AdminLayout/Interfaces/users';

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
  constructor(private router:Router,private user:AuthService) { }

  ngOnInit(): void {
    this.checkRole()
  }
  checkRole(){
    let role=localStorage.getItem("userRole")
    switch (role) {
      case "SuperAdmin":
        this.router.navigate(['/ViewUsers'])
        break;
      case "Admin":
        this.router.navigate(['/ManageTeacher'])
          break;
      default:
        this.router.navigate([''])
    }
  }
  LogInTS(users:Auth){
return this.user.logIn(users).subscribe(result=>{
  this.data=result;

  localStorage.setItem('userRole',this.data.Role)
  this.checkRole();


 
})
  }
}