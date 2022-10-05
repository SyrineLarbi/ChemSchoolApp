import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/AdminLayout/Interfaces/users';
import { UsersService } from 'src/app/AdminLayout/Services/users.service';
import { Route,Router } from '@angular/router';
import { AuthService } from 'src/app/AdminLayout/AuthService/auth.service';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:any=[];
  searchText:any;
  constructor(private router:Router,private userService:UsersService, private authentification:AuthService) { 

  }

  ngOnInit(): void {
    this.ViewUsersTS()
  }
  ViewUsersTS(){
    return this.userService.ViewUser().subscribe(result=>{
      this.users=result
    })
  }
  DeleteUserTS(user:Users){
    return this.userService.DeleteUSer(user).subscribe(result=>{
      this.ViewUsersTS();
    })
  }

}
