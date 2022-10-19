import { Component, OnInit } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Teachers } from '../../../Interfaces/teachers';
import { TeachersService } from '../../../Services/teachers.service';
import { Route,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  closed=false;
  navDetails=navData;
  TeacherData:any=[];
  id :any;
  url:any;;
  constructor(private router:Router, private teacherserv:TeachersService, private route:ActivatedRoute ) { 
    this.id=route.snapshot.params["_id"];
  }

  ngOnInit(): void {
    this.getDataTeacher(this.id)
  }

  selectFile(e:any){
    if(e.target.files){
      let toRead=new FileReader();
      toRead.readAsDataURL(e.target.files[0]);
      toRead.onload=(event:any)=>{
        this.url=event.target.result;
        // console.log(this.url);
      }
    }
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
  getDataTeacher(teacher:Teachers){
    return this.teacherserv.getInfoTeacher(teacher).subscribe(getData=>{
      this.TeacherData=getData;
      this.url="../../../assets/" + this.TeacherData.Picture
      console.log(this.url)
    })
  }
updateTeacher(teacher:TeachersService){
  return this.teacherserv.updateUser(this.TeacherData).subscribe(update=>{
    this.TeacherData=update;
    this.url=this.TeacherData.Picture
    console.log(this.url)
  
    this.router.navigate(['/ManageTeacher'])
  })


}
}
