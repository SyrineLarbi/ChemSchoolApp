import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/AdminLayout/AuthService/auth.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private authentification:AuthService,private route:Router ) { }

  ngOnInit(): void {
    this.logOut();
}
logOut(){
  return this.authentification.logOut().subscribe(result=>{
    localStorage.removeItem('userRole');
    this.route.navigate([""])
  })
}
}
