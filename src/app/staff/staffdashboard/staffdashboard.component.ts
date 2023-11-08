import { Component, OnInit } from '@angular/core';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttphandlerService } from '../../shared/http-handler.service';
import { ErrordialogueComponent } from '../../errordialogue/errordialogue.component';
import { user } from '../../interface/user';


@Component({
  selector: 'app-staffdashboard',
  templateUrl: './staffdashboard.component.html',
  styleUrls: ['./staffdashboard.component.css']
})
export class StaffdashboardComponent implements OnInit{

username = localStorage.getItem('name');
userid = localStorage.getItem('userid')

  department : any;
  id : any;
  details :any;
  leaveArr : any = {};
isCollapsed = false;
  isAuthenticated!: boolean;

  constructor(public dialog: MatDialog,private router : Router,private httpserve : HttphandlerService){}


ngOnInit(): void {
  this.department = localStorage.getItem('dept');
  this.id = localStorage.getItem('id');
  console.log(this.id)
  this.getdata();


const storedItem = localStorage.getItem('myKey');

if (storedItem !== null) {
  this.details = JSON.parse(storedItem);
  console.log(this.details);
} else {
  console.log('Item not found in localStorage');
}

// console.log(this.userid)


  this.httpserve.getLeaveDataOfStaff(this.userid).subscribe((param:any)=>{
    // console.log(param)
    this.leaveArr=param
  })
  this.httpserve.dialongStaffrelSubj.subscribe((param:any)=>{
    this.leaveArr=param;
    // console.log(param)
  })

}

toggleMenu() {
  this.isCollapsed = !this.isCollapsed;
}


openDialog() {
  this.dialog.open(ApplyLeaveComponent,{
    width:'500px',
    height:'500px'
  });
}

signout(){
  this.openErrorDialog('Sign Out Successfully!', '');
  localStorage.clear();
    this.httpserve.isAuthenticated = false;
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
}

openErrorDialog(title: string, message: string): void {
  this.dialog.open(ErrordialogueComponent, {
    data: { title, message },
    width:'200px'  });
}

getdata(){
  this.httpserve.getstaffdetails(this.id).subscribe((rawdata : user[])=>{
    console.log(rawdata);
    for(let mainuser in rawdata){
      if(rawdata[mainuser].id == this.id){
        // console.log('id mathces')
        // console.log(rawdata[mainuser])
      }
    }
  })
}
}
