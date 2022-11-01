import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { read } from 'fs';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
chart:any
canvas:any;
ctx:any;
user:any=[];
totalUser:any;
userAdmin:any=[];
userTeacher:any=[];
userStudent:any=[];
teatcherNum:any;
studentnmr:any;
adminnum:any;
dataUsers:any
total:any
users=parseInt(localStorage.getItem("totalUser"))
@ViewChild('mychart') mychart:any;
usersCounter:number=0;
usercountStop:any=setInterval(()=>{
 this.usersCounter++;
 if(this.usersCounter==this.users)
 {
  clearInterval(this.usercountStop);
 }
},30)
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.chart=document.getElementById("myChart")
    Chart.register(...registerables);
    this.dataChart();
    this.loadChart();
    
  }
  loadChart(){
    let teacher=localStorage.getItem("teacher")
    let student=localStorage.getItem("student")
    let admin=localStorage.getItem("admin")
    let other=localStorage.getItem("other")
    new Chart(this.chart,{
      type:'bar',
      data: {
        datasets:[{
          data:[teacher,student,admin,other],
          label:"Users",
          barPercentage:0.5,
          barThickness:30,
          borderColor:'black',
          backgroundColor	:'rgba(0, 0, 0, 0.8)',
          borderRadius:5,
          hoverBackgroundColor:'rgba(0, 0, 0, 0.6)'
        },],
        labels:[
          "Teacher",
          "Students",
          "Admin",
          "Without Role"
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
  dataChart(){
      return this.userService.ViewUser().subscribe(result=>{
       this.total=result.length
        for(let i=0;i<=result.length;i++){
          this.user=(result[i].Role)
          switch ( this.user) {
            case "Admin":
              this.userAdmin.push(this.user)
             
              break;
              case "Teacher":
              this.userTeacher.push(this.user)
             
              break;
              case "Student":
              this.userStudent.push(this.user)
             
              break;
          
            default:
              break;
          }
          this.teatcherNum=this.userTeacher.length
          this.studentnmr=this.userStudent.length
          this.adminnum=this.userAdmin.length
         
          localStorage.setItem("teacher",this.teatcherNum);
          localStorage.setItem("student",this.studentnmr)
          localStorage.setItem('admin',this.adminnum)
         this.totalUser= this.studentnmr+ this.adminnum+ this.teatcherNum
         this.dataUsers=this.total-this.totalUser
         console.log(this.dataUsers+"f")
         localStorage.setItem("totalUser",this.total)
         localStorage.setItem("other",this.dataUsers)
        }
      })
    }
  }
