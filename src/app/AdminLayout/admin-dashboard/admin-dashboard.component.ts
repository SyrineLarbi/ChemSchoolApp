import { Component, OnInit,ViewChild } from '@angular/core';
import { navData } from 'src/app/Interfaces/nav.Details';
import { Users } from 'src/app/Interfaces/users';
import { UsersService } from 'src/app/Services/users.service';
import { Route,Router } from '@angular/router';
import { Chart,registerables } from 'chart.js';
import { read } from 'fs';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  closed=false;
  teachers:any=[]
  navDetails=navData;
  constructor(private UserServ:UsersService, private route:Router) { }
  EmailTeachers:any=[];
  data:any;
  a:any;
  chart:any;
  canvas:any;
  ctx:any;
  @ViewChild('mychart') mychart:any;
  usersCounter:number=0;
  ngOnInit(): void {
    this.viewEmailT()
    this.count()
    this.chart=document.getElementById("myChart")
    Chart.register(...registerables);
    this.loadChart();
  }
  toggleSideBar(){
    this.closed=!this.closed
  }
  viewEmailT(){
    return this.UserServ.ViewUser().subscribe(emailTeacher=>{
      for(let i=0; i<= emailTeacher.length; i++){
        if(emailTeacher[i].Role=="Teacher"){
           this.teachers=emailTeacher[i]
           this.data= this.EmailTeachers.push(this.teachers);
          //  console.log(this.teachers)
          //  this.data=this.EmailTeachers.length
        
          //  console.log(this.data)
        }
      }  console.log(this.EmailTeachers)

      // this.count()
    
    })

}
count(){
  var usercountStop:any;
  this.a=parseInt(this.data)
  console.log(this.EmailTeachers)
  usercountStop=setInterval(()=>{
    this.usersCounter++;
    if(this.usersCounter==this.data)
    {
     clearInterval(usercountStop);
    }
   },50)
}
loadChart(){

  new Chart(this.chart,{
    type:'bar',
    data: {
      datasets:[{
        data:[12,15,20],
        label:"Users",
        backgroundColor:'white',
        // tension:0.2,
        borderColor:'black',
      },],
      labels:[
        "Teacher","students","courses"
      ],
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      scales:{
        y:{
          beginAtZero:true,
        }
      }
    }
  })
}

}
