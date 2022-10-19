import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Interfaces/users';
import { UsersService } from 'src/app/Services/users.service';
import { Route,Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService/auth.service';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:any=[];
  searchText:any;
  totalLength:any;
  page:number=1;
  itemsPerPage:number=3;
  constructor(private router:Router,private userService:UsersService, private authentification:AuthService) { 

  }

  ngOnInit(): void {
    this.ViewUsersTS()
  }
  ViewUsersTS(){
    return this.userService.ViewUser().subscribe(result=>{
      this.users=result
      this.totalLength=result.length
    })
  }
  DeleteUserTS(user:Users){
    return this.userService.DeleteUSer(user).subscribe(result=>{
      this.ViewUsersTS();
    })
  }

}
