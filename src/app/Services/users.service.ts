import { Injectable } from '@angular/core';
import { Users } from '../Interfaces/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private APIAddUsers="http://localhost:3001/AddUser";
private APIViewUsers="http://localhost:3001/ViewUsers";
private APIDeleteUser="http://localhost:3001/DeleteUser/";
private APIGetData="http://localhost:3001/getUserData/";
private APIUpdateUser="http://localhost:3001/updateUser";

  constructor(private http:HttpClient) { }


addUser(user:Users){
return this.http.post(this.APIAddUsers,user)
}

ViewUser(){
  return this.http.get<any>(this.APIViewUsers)
}

DeleteUSer(id:any){
  return this.http.get<any>(this.APIDeleteUser+id)
}
getData(id:any){
  return this.http.get<any>(this.APIGetData+id)
}
updateUser(user:any){
   return this.http.post(this.APIUpdateUser,user)
}
}
