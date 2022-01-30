import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder,private api:AuthenticationService,private router:Router) {
    this.formInit();
  }

  ngOnInit(): void {
    if(this.api.isUserLoggedIn){
      this.router.navigate(['/home'])
    }
  }

  formInit(){
    this.form= this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  submit(){
    const userPayload = {"email":this.form.value.email,"password":this.form.value.password}
    this.api.login(userPayload);
  }

}
