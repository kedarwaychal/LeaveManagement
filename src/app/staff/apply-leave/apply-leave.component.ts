import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { leavemodel } from 'src/app/leavemodel';
import { HttphandlerService } from 'src/app/shared/http-handler.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit{
  public leave: leavemodel = {} as leavemodel;
  info : any;
  startDate!: Date;
  endDate!: Date;
  reason!: string;
  constructor(private httserve:HttphandlerService,private route:Router){}

  ngOnInit(){


const storedItem = localStorage.getItem('myKey');

if (storedItem !== null) {
  this.info = JSON.parse(storedItem);
  console.log(this.info);
} else {
  console.log('Item not found in localStorage');
}



  }
  apply(){
    // this.api.applyleave(this.leave).subscribe((res)=>{
    //   alert("leaveaplysuccessfully"),
    //   this.route.navigate(['/viewleave'])
    // })

    const millisecondsPerDay = 24 * 60 * 60 * 1000; 
      const startTime = this.startDate.getTime();
      const endTime = this.endDate.getTime();
      const difference = endTime - startTime;
      const days = Math.floor(difference / millisecondsPerDay) + 1;
    let startFrom: string = this.startDate.toString().slice(3, 15);
    let endTo: string = this.endDate.toString().slice(3, 15);
    let numberOfDays: any = days;
    let postLeaveObj: any = {
      leaveStart: startFrom,
      leaveEnd: endTo,
      leaveDays: numberOfDays,
      leaveReason: this.reason,
      userId: this.info.username,
      approvedleave: this.info.approvedleave ,
      rejectedleave: this.info.rejectedleave,
      statusLeave:"Pending  " ,
      totalLeaves: this.info.totalLeaves,
      depart: this.info.department,
      fName: this.info.firstName,
      lName: this.info.lastName
    }

    console.log(postLeaveObj)

    this.httserve.getLeaveDataOfStaff(this.info.email).subscribe((param:any)=>{
      for(let leave in param){
        // if(param[leave].statusLeave == "Pending  "){
        //   console.log('')
        //   alert('Already applied for leave. Please wait till the status of leave Applied.')
        //   return
        // }
      }
      if(this.info.totalLeaves >= numberOfDays){
        this.httserve.postLeaveData(postLeaveObj).subscribe((param: any) => {
          console.log(param)
           this.httserve.getLeaveDataOfStaff(this.info?.username).subscribe((param: any) => {
             this.httserve.dialongStaffrelSubj.next(param)
            console.log(param)
           })
         })

         
     }else{
      console.log('')
      alert(`Can not apply leaves more than Balanced Leaves. Your Balanced leaves = ${this.info.totalLeaves}`)
     }
    })

  }

}
