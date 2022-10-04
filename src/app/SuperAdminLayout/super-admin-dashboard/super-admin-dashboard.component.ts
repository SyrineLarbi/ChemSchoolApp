import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { read } from 'fs';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
chart:any
canvas:any;
ctx:any;
@ViewChild('mychart') mychart:any;
usersCounter:number=0;
usercountStop:any=setInterval(()=>{
 this.usersCounter++;
 if(this.usersCounter==50)
 {
  clearInterval(this.usercountStop);
 }
},10)
  constructor() { }

  ngOnInit(): void {
    this.chart=document.getElementById("myChart")
    Chart.register(...registerables);
    this.loadChart();
  }
  loadChart(){
    new Chart(this.chart,{
      type:'doughnut',
      data: {
        datasets:[{
          data:[0, 10, 5, 2, 20, 30, 45],
          label:"Users",
          backgroundColor:'red',
          // tension:0.2,
          borderColor:'black',
        },],
        labels:[
          12,
          14,
          20,
          10, 5 , 1, 14
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
