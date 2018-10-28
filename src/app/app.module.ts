import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { Ng2OrderModule } from 'ng2-order-pipe';


import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';

import { Myservice } from './app.service';
import { SearchDetailsComponent } from './search-result/search-details/search-details.component'


import { PersonSearchPipe } from './search-result/search-details/personSearch.pipe';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    AppComponent, SearchResultComponent, SearchDetailsComponent,PersonSearchPipe, LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    Ng2OrderModule,
    ReactiveFormsModule,
      NgbModule.forRoot(),
      AppRoutingModule,


  ],
  exports: [
  
    PersonSearchPipe,    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
