import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private api:AuthenticationService) { }

  ngOnInit(): void {
    this.api.logout();
  }

}
