import { Component, OnInit } from '@angular/core';
import {faUser, faLock, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Users } from '../../../Interfaces/users';
import { UsersService } from '../../../Services/users.service';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  faUser=faUser;
  Password:any;
  confirmPass:any;
  Email:any;
  verify:any
  role=false;
  faPassword=faLock;
  fahide=faEyeSlash;
  messageAuthError:any;
  users:any=[];
  constructor(private userService:UsersService,private route:Router) { }

  ngOnInit(): void {
    this.verifyEmail();
    // this.check()
  }
  addUserTs(user:Users){
    return this.userService.addUser(user).subscribe(result=>{
      console.log("user added")
      if(this.Email=="superadmin@mail.com" && this.Password=="superadmin"){
        this.route.navigate(["/Dashboard"])
      }
      else{
        this.route.navigate(["/guest"])
      }
    })
  }
  checkMailSuperAdmin(){
    if(this.Email=="superadmin@mail.com" && this.Password=="superadmin"){
      this.role=!this.role
    }
    else{
      this.role=this.role
    }
  }
  verifyEmail(){
    return this.userService.ViewUser().subscribe(result=>{
    for(let i=0; i<=result.length;i++){
      this.users.push(result[i].Email)
      console.log(this.users)
    }
})
}
check(){
  this.users.forEach(emai => {
    if(emai==this.Email){
      this.verify=!this.verify
    }
    else{
      this.verify=this.verify
    }
})
}

}
