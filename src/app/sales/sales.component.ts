import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  meat:boolean = false;
  vegetable:boolean = false;
  seasoning:boolean = false;
  packet:boolean = false;


  constructor() { }

  

  ngOnInit(): void {
  }
  showmeat(){
    
    this.meat = true;
    this.vegetable = false;
    this.seasoning = false;
    this.packet = false;
  }
  showvegetable(){
    this.meat = false;
    this.vegetable = true;
    this.seasoning = false;
    this.packet = false;
  }
  showseasoning(){
    this.meat = false;
    this.vegetable = false;
    this.seasoning = true;
    this.packet = false;
  }
  showpacket(){
    this.meat = false;
    this.vegetable = false;
    this.seasoning = false;
    this.packet = true;
  }


}
