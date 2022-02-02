import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularlogin';
  
  public get isUserLoggedIn(){
    return this.api.isUserLoggedIn || false;
  }
  constructor(private api:AuthenticationService,private router:Router){}

  ngOnInit(){
  }

}
