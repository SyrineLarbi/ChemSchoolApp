import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private APILogIn="http://localhost:3001/LogIn"
private APILogOut="http://localhost:3001/logOut";
  constructor(private http:HttpClient) { }

logIn(user:Auth){
  return this.http.post(this.APILogIn,user)

}
logOut(){
  console.log('hhhhhhh')
return this.http.get<any>(this.APILogOut)
}

}
