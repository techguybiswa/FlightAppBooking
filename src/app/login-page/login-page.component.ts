import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }
  myEmail: any;
  flag: any;
  myPassword: any;
  ngOnInit() {
    this.flag=false;
  }
  goToMainPage() {
    if((this.myEmail == 'biswarup@gmail.com') && (this.myPassword == 'biswarup')) {
      this.router.navigateByUrl('/book-ticket');
    }
    else {
      alert('Incorrect maild or password');
    }
  }
  showMenu()
{
  this.flag=!this.flag;
}

}
