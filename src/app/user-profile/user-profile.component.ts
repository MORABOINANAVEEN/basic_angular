import { Component,OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute)
  userService = inject(UserService)
  currentUser:any;

  ngOnInit(): void {
   let username = this.activatedRoute.snapshot.paramMap.get('username')
  this.userService.getUserBYUsername(username).subscribe(
    (userList)=>{

     this.currentUser = userList[0]; 
      // console.log(user)
    },
    (error)=>{
      console.log("err in reading user data",error)
    }
  )
  }
  
}
