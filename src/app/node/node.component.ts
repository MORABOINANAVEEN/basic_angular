import { Component, OnInit,inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrl: './node.component.css'
})
export class NodeComponent implements OnInit{

  dataService = inject(DataService)
  users$;
  ngOnInit(): void {
    this.users$ =this.dataService.getUsers()
  }


  searchByName:string;

}
