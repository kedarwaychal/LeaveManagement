import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './staff/apply-leave/apply-leave.component';
import { ViewLeaveComponent } from './hod/view-leave/view-leave.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { StaffdashboardComponent } from './staff/staffdashboard/staffdashboard.component';
import { HoddashboardComponent } from './hod/hoddashboard/hoddashboard.component';
import { Authguard } from './auth/auth-guard.service';
import { Authguardlogout } from './services/authlogin.guard';
import { StaffModule } from './staff/staff.module';
import { HodModule } from './hod/hod.module';
import { PermissiondeniedComponent } from './permissiondenied/permissiondenied.component';


const routes: Routes = [
  // {path:'',component:LoginComponent},
  {path: '',
  redirectTo: 'login',
  pathMatch: 'full'},
  {path:'login',component:LoginComponent,canActivate : [Authguardlogout]},
//  {path:'applyleave',component:ApplyLeaveComponent},
//  {path:'viewleave',component:ViewLeaveComponent},
  {path:'registration',component:RegistrationComponent,canActivate : [Authguardlogout]},
  // {path:'staffdash',component:StaffdashboardComponent,canActivate : [Authguard]},
  // {path:'hoddashboard',component:HoddashboardComponent,canActivate : [Authguard]}

  {path:'staffdash',loadChildren : ()=>{return import('./staff/staff.module').then((m)=>{
    return m.StaffModule })},canActivate : [Authguard]},
  {path:'hoddashboard',loadChildren : ()=>{return import('./hod/hod.module').then((m)=>{
    return m.HodModule })},canActivate : [Authguard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
