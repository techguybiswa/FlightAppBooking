import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css', ],
  providers: [],

})

export class SearchResultComponent implements OnInit {
  states: any;

  flag:any;
  title: any;
 search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []: 
        this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


  constructor() { 
    this.flag=false;
  }
model:any;
toLoc: any;
fromLoc: any;
dateTravel : any;
peopleCount : any;
view: boolean;
destinationTo: any;
destinationFrom : any;
  ngOnInit() {
    this.destinationFrom = "Kolkata";
    this.destinationTo = "Bangalore";
 this.states = ["Chennai", "Kolkata" ,"Bangalore" ,"Delhi"];
  	 this.model = {
    left: true,
    middle: false,
    right: false
  };
  this.view=false;



  }

showMenu()
{
  this.flag=!this.flag;
}


showResult()
{
  if((this.dateTravel == null ) || (this.peopleCount == null )|| (this.fromLoc == null )|| (this.toLoc == null )) 
  {
    alert("Please fill all the details");
  }
  else {
       this.destinationFrom = this.toLoc;
    this.destinationTo = this.fromLoc;
    console.log("CLicked the showRes func");
  this.view=true;
    
  }

    // console.log("Value of desfrom and desto are: " + this.destinationFrom +" " +    this.destinationTo);
}


}
