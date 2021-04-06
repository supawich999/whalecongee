import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  closeResult = '';
  meat:boolean = true;
  vegetable:boolean = false;
  seasoning:boolean = false;
  packet:boolean = false;

  constructor(private modalService: NgbModal) {}

  
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

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
