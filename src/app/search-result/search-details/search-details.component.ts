
import { Component, OnInit , Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { FilterPipe }from '../filter.pipe';
import { PersonSearchPipe } from './personSearch.pipe';

import { Ng2OrderModule } from 'ng2-order-pipe';

import * as data from './data.json';


@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
	@Input() destinationTo:any;
	@Input() destinationFrom: any;
  price:any;
   order: string;
   nameSearch : any;
   searchText : any = "Air India";
   str1 : any;
   str2: any;

filterAirline(str)
{
  console.log("Filtering flight by name: " + str);
  this.nameSearch = str;
}
sortList(str)
{
  console.log("Sorting by " + str);
   this.order = str;

}
	  flag:boolean;
	  showVal:boolean;
	  fromFlight: any;
	  toFlight: any;
  	title: any;
    flightData: any;
  constructor(private modalService: NgbModal,) {
  this.flag=false;
      this.showVal=false;
     }

 closeResult: string;
  ngOnInit() {
        this.flightData = (<any>data);
        console.log(this.flightData);

  	console.log("I am in 2nd comp");
  	console.log(this.destinationFrom);
    console.log(this.destinationTo);
  	 this.toFlight = this.destinationTo;
     this.fromFlight =  this.destinationFrom; 
  	// console.log(this.destinationTo);
  	// console.log(this.fromFlight);


  }
  showPrice(value)
  {
  	console.log(value);
  	this.showVal=true;
  }
  open_sort(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }
open_filter(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }  
  // filterByDuration(str1,str2)
  // {
  //   this.
  // }
showMenu()
{
  this.flag=!this.flag;
}

}
