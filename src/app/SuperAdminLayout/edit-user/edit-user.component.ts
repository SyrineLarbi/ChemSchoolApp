import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/AdminLayout/Interfaces/users';
import { UsersService } from 'src/app/AdminLayout/Services/users.service';
import { Route,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
UserData:any=[];
id :any;


  constructor(private router:Router,private userService:UsersService, private route:ActivatedRoute) {
    this.id=route.snapshot.params["_id"];
    console.log(this.id)
   }

  ngOnInit(): void {
    this.getDataUser(this.id)
  }
getDataUser(user:Users){
  return this.userService.getData(user).subscribe(getData=>{
    this.UserData=getData
  })
}
updateUser(user:UsersService){
  return this.userService.updateUser(this.UserData).subscribe(update=>{
    this.UserData=update;
  
    this.router.navigate(['/manageUser'])
  })


}


}
