import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient = inject(HttpClient);

  userLoginStatus=new BehaviorSubject(false)

  setUserLoginStatus(){
    this.userLoginStatus.next(true)
  }
  getUserLoginStatus(){
    this.userLoginStatus.asObservable()
  }

  //create user(user registration)
  createUser(newUser:User):Observable<any>{
   return  this.httpClient.post('http://localhost:3000/users',newUser)
  }

  //user login
  userLogin(userCredObj):Observable<any>{
    return this.httpClient.get(`http://localhost:3000/users?username=${userCredObj.username}`);
  }

  //get user by username
  getUserBYUsername(username):Observable<any>{
    return this.httpClient.get(`http://localhost:3000/users?username=${username}`);
  }

  //user logout
}
