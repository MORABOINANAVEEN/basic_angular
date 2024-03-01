import { Component, inject } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
 import {User} from '../models/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {

 fb: FormBuilder = inject(FormBuilder);
 userService = inject(UserService)
 router = inject(Router)

users = this.fb.group({
  username:[''],
  password:[''],
  email:[''],
  dob:[''],
});

onSubmitUser(){
  let {username,password,email,dob} = this.users.value;
  let newUser = new User(username,password,email,dob);
  // console.log(newUser);
  this.userService.createUser(newUser).subscribe(
    (res)=>{
      console.log(res);
      // this.router.navigate(['/login'])
    },(error)=>{
      console.log("err in user creation",error);
      
    }
  )
}

}
