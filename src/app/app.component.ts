import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChemSchoolApp';
  connected=false;
  // check(){
  //   if(localStorage.getItem("userRole","")){

  //   };
  // }
  constructor(private router: Router){
    this.checkRole();
  }
  checkRole(){
    let role=localStorage.getItem("userRole")
    switch (role) {
      case "SuperAdmin":
        this.connected=!this.connected
        console.log("hi")
        break;
      case "Admin":
        this.connected=!this.connected
          break;
        case null:
          this.connected=this.connected
          this.router.navigate([""])
            break;
        
    }
  }

}
