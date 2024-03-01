import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrl: './java.component.css'
})

export class JavaComponent {
  
   totalPrice = computed(()=>this.data[0]['total']()+this.data[1]['total']())
 
  // data:string ='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor officia,sequi consectetur magni aspernatur quaerat';
  // rupee:number=30000;
  // per:number=0.20;
  // person = {
  //   pid : 10,
  //   name :'navi'
  // }

  // current = new Date();

  // sampleData:number = 12.345678;

  data =[
    
      {
        id: 1,
        name: "Television",
        price: 400000,
        total: signal(0),
        selectedQuantity: signal(0),
      },
      {
        id: 2,
        name: "Washing machine",
        price: 35000,
        total: signal(0),
        selectedQuantity: signal(0),
      }
  ];

  decreaseAmount(id:number){
    //store previous values
    var currQuantity = this.data[id-1]['selectedQuantity']();
    var price = this.data[id-1]['price'];
   
  //update new values only if quanity > 0
    if(currQuantity>0){
      this.data[id-1]['selectedQuantity'].set(currQuantity-1);
      this.data[id-1]['total'].set((currQuantity-1)*price);
   
    }
   
  }
   
  increaseAmount(id:number){
      //store previous values
      var currQuantity = this.data[id-1]['selectedQuantity']();
      var price = this.data[id-1]['price'];
     
      //update new values
      this.data[id-1]['selectedQuantity'].set(currQuantity+1);
      this.data[id-1]['total'].set((currQuantity+1)*price);
     
  }
   
  }
  


