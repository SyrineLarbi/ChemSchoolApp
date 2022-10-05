import { Component, OnInit } from '@angular/core';
import { navData } from './nav.Details';
import { Users } from '../../Interfaces/users';
import { UsersService } from '../../Services/users.service';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  navDetails=navData;
  closed=false;

  constructor(private userService:UsersService,private route:Router) { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
  addUserTs(user:Users){
    return this.userService.addUser(user).subscribe(result=>{
      console.log("user added")
      this.route.navigate(["/ViewUsers"])
    })
  }



}
