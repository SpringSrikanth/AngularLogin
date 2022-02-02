import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm:any;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      gender:['',[Validators.required]],
      dateOfBirth:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  public getFirstName(){
    return this.signUpForm.get('firstName');
  }
  public getLastName(){
    return this.signUpForm.get('lastName');
  }
  public getGender(){
    return this.signUpForm.get('gender');
  }
  public getDateOfBirth(){
    return this.signUpForm.get('dateOfBirth');
  }
  public getEmail(){
    return this.signUpForm.get('email');
  }
  public getPassword(){
    return this.signUpForm.get('password');
  }

  onSubmitSignUpForm(){
    console.log(this.signUpForm.value);
  }
}
