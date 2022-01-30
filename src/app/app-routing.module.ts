import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/login"
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    canActivate:[AuthGuard],
    component:LogoutComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'home',
    canActivate:[AuthGuard],
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
