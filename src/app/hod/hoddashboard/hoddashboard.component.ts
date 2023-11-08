import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttphandlerService } from '../../shared/http-handler.service';
import { ErrordialogueComponent } from '../../errordialogue/errordialogue.component';
import { MatDialog } from '@angular/material/dialog';
import { user } from '../../interface/user';

@Component({
  selector: 'app-hoddashboard',
  templateUrl: './hoddashboard.component.html',
  styleUrls: ['./hoddashboard.component.css']
})
export class HoddashboardComponent implements OnInit{

  liClass: string = '';

leaveArr : any;
department = localStorage.getItem('dept');
username = localStorage.getItem('name');
userid = localStorage.getItem('userid');
isCollapsed = false;



constructor(private router : Router,private httpserve:HttphandlerService,private dialog : MatDialog){}

ngOnInit(): void {
  this.getdata();
}

toggleMenu() {
  this.isCollapsed = !this.isCollapsed;
}

getdata(){
  this,this.httpserve.getleavedataofhod(this.department).subscribe((params :user[])=>{
    this.leaveArr = params;
    console.log(params)
  })

}

signout(){
  this.openErrorDialog('Sign Out Successfully!', '');
  // this.toastserve.show('Sign out Successfully!')
  localStorage.clear();
  this.httpserve.isAuthenticated = false;
  localStorage.removeItem('auth');
  this.router.navigate(['/login'])
}

openErrorDialog(title: string, message: string): void {
  this.dialog.open(ErrordialogueComponent, {
    data: { title, message },
    width:'200px'  });
}

onApprove(lData : any){
  console.log(lData.id)
  this.httpserve.patchLeaveData(lData.id,{statusLeave:'Approved'}).subscribe((param:any)=>{
    for(let data in this.leaveArr){
      if(this.leaveArr[data].id == lData.id){
        this.leaveArr[data].statusLeave='Approved';
      }
    }
  })
  let totalLeavess = lData.totalLeaves - lData.leaveDays;
  let obj1 = {
     approvedleave :lData.leaveDays + lData.approvedleave  ,
     totalLeaves : totalLeavess,
  }
  this.httpserve.getUsers().subscribe((param:any)=>{
    for(let user in param){
      if(param[user].email == lData.userId){
        this.httpserve.patchUser(param[user].id,obj1).subscribe((para:any)=>{
        })
      }
    }
  })

}
onReject(lData:any){
  this.httpserve.patchLeaveData(lData.id,{statusLeave:'Rejected'}).subscribe((param:any)=>{
    for(let data in this.leaveArr){
      if(this.leaveArr[data].id == lData.id){
        this.leaveArr[data].statusLeave='Rejected';
      }
    }
  })
  let obj1 = {
    rejectedleave :  lData.leaveDays + lData.rejectedleave,
    statusLeave : 'Rejected'
 }
 this.httpserve.getUsers().subscribe((param:user[])=>{
   for(let user in param){
     if(param[user].email == lData.userId){
       this.httpserve.patchUser(param[user].id,obj1).subscribe((para:any)=>{
       })
     }
   }
 })
}
}
