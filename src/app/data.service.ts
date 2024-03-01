import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  //inject httpClient
  httpClient = inject(HttpClient)

  //get users data
   getAllUsers():Observable<any[]>{
    //make http get req
    // return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/posts")
    return this.httpClient.get<any[]>("https://reqres.in/api/users?page=2");
  }
getUsers(){
  return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
}
  
}
