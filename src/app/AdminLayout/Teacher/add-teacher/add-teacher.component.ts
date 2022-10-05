import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/SuperAdminLayout/add-users/nav.Details';
import { Teachers } from '../../Interfaces/teachers';
import { TeachersService } from '../../Services/teachers.service';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../AuthService/auth.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  closed=false;
  navDetails=navData;
  constructor(private authentification:AuthService,private teacherSrv:TeachersService, private route:Router) { }

  ngOnInit(): void {
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
  logOut(){
    return this.authentification.logOut().subscribe(result=>{
      localStorage.removeItem('userRole');
      this.route.navigate([""])
    })
  }
}
