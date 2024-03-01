import { Component,inject,OnDestroy,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent implements OnInit,OnDestroy {

//   dataService = inject(DataService)

//   posts:any[]=[];

//   postsUnsubscribe?:Subscription;

//   ngOnInit(): void {
    
//    this.postsUnsubscribe = this.dataService.getAllUsers().subscribe((posts)=>{
//       this.posts = posts
//     },
//     (error)=>
//     {
//       console.log(error.message)
//     });
//   }

//   ngOnDestroy(): void {

//     this.postsUnsubscribe?.unsubscribe();
//     // console.log("home destroy");
//   }

// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  users:any = {};
  data:any[] = [];
  index:number = 0;
  dataService = inject(DataService);
 
  ngOnInit():void {
    this.dataService.getAllUsers().subscribe(users => {
      this.users = users;
      this.data = this.users.data;
      console.log(this.data);
    },(error) => {
      console.log(error.message)
    });
  }
 
  display(i:number){
    this.index = i;
    console.log(this.index);
  }
}
