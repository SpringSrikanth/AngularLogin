import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient,private router:Router) { }

  public get isUserLoggedIn(){
    return !!(localStorage.getItem('token'));
  }

  public login(userPayload:any){
    return this.http.post('http://localhost:3000/signin',userPayload,{headers:this.headers}).subscribe((res:any)=>{
      localStorage.setItem('token',res?.token);
      this.router.navigate(['/home'])
    },(error)=>{
      console.log('Error occuring while calling login() '+error.message);
      localStorage.clear();
    })
  }

  public signUp(userPayload:User){
    return this.http.post('http://localhost:3000/signup',userPayload,{headers:this.headers}).subscribe((res:any)=>{
      console.log(res);
    },(error)=>{
      console.log('Error occuring while calling signUp() '+error.message);
    })
  }

  public logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  public getToken(){
    return localStorage.getItem('token')!==null ? localStorage.getItem('token') : ''
  }
}
