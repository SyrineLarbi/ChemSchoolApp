import { Component, OnInit } from '@angular/core';
import {faUser, faLock, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Route,Router } from '@angular/router';
import { Auth } from '../AuthService/auth';
import { AuthService } from '../AuthService/auth.service';
import { Users } from '../Interfaces/users';

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
  constructor(private router:Router,private user:AuthService) { }

  ngOnInit(): void {
  }
  LogInTS(users:Auth){
return this.user.logIn(users).subscribe(result=>{
  console.log("user logged");
    if(users.Email=="admin@gmail.com" && users.Password=="2022"){
      this.router.navigate(["/addusers"])
    }
    else if(users){
      this.router.navigate(["/Teacher"])
    } 
},err=>this.messageAuthError="invalid email and password")
  }
}
