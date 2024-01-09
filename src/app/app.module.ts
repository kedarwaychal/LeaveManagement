import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import{ MatNativeDateModule} from '@angular/material/core';
// import {MatButtonModule} from '@angular/material/button';
// import { ViewLeaveComponent } from './view-leave/view-leave.component';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatTableModule} from '@angular/material/table';
// import {MatIconModule} from '@angular/material/icon';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
// import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
// import { HoddashboardComponent } from './hoddashboard/hoddashboard.component';
// import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Authguard } from './auth/auth-guard.service';
// import { SharedModule } from './shared/shared.module';
// import { MatPaginatorModule } from '@angular/material/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AddstaffComponent } from './addstaff/addstaff.component';
import { SharedModule } from './shared/shared.module';
import { HttphandlerService } from './shared/http-handler.service';
import { ErrordialogueComponent } from './errordialogue/errordialogue.component';
import { Authguardlogin } from './auth/auth-login.service';
import { PermissiondeniedComponent } from './permissiondenied/permissiondenied.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Jwtinterceptor } from './auth/auth.interceptor';
import { FooterComponent } from './footer/footer.component';
import { Titlecase } from './shared/titleCase.pipe';
import { Headinterceptor } from './auth/header.intercept';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OneComponent } from './one/one.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SuboneComponent } from './one/subone/subone.component';



@NgModule({
  declarations: [
    AppComponent,
    // ApplyLeaveComponent,
    // ViewLeaveComponent,
    LoginComponent,
    // HeaderComponent,
    RegistrationComponent,
    ErrordialogueComponent,
    PermissiondeniedComponent,
    Titlecase,
    OneComponent,
    SuboneComponent
    // FooterComponent,
    // StaffdashboardComponent,
    // HoddashboardComponent,
    // AddstaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    // MatDatepickerModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatNativeDateModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatTableModule,
    // MatIconModule,
    // HttpClientModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MatDialogModule,
    // MatPaginatorModule
    ],
  providers: [Authguard,Authguardlogin,{
    provide : HTTP_INTERCEPTORS,
    useClass : Jwtinterceptor,
    multi : true
  },
  // {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:Headinterceptor,
  //   multi:true
  // }
],
  exports:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private authService: HttphandlerService) {
    this.authService.checkAuthenticationStatus();
  }
 }
