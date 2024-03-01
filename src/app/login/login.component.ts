import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  fb:FormBuilder = inject(FormBuilder)
  userService = inject(UserService)
  router=inject(Router)

  userCredentials = this.fb.group({
    username:[''],
    password:['']

  });

  // onSubmitUser(){
  //   console.log(this.userCredentials.value)
  //   this.userService.userLogin(this.userCredentials.value).subscribe(
  //     (res)=>{
  //       if(res.length===0){
  //         alert("Invalid username")
  //       }else{
  //         //comapre passwords
  //         if(this.userCredentials.value.password===res[0].password){
  //           //navigate to user profile
  //           this.router.navigate([`/user-profile/${res[0].username}`])
  //         }else{
  //           alert("invalid password")
  //         }
  //       }
  //       // console.log(res)
  //     },
  //     (error)=>{
  //       console.log("err in user login",error)
  //     }
  //   )
  }
  