import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttphandlerService } from '../shared/http-handler.service';
import { raceWith } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(private httpserve : HttphandlerService,private router :Router){}

  reactobj : FormGroup | any;

  isNewUser: boolean = true;

  username : any;

  ngOnInit(){
    this.forminit();
  }


  forminit(){
    this.reactobj = new FormGroup({
      username : new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  OnSubmit(){
    let obj1 = {
      username : this.reactobj.value.username,
      password : this.reactobj.value.password
    }
    this.httpserve.signInCurrentUser(obj1).subscribe((rawdata : any)=>{
      // console.log('Loin successfully',rawdata)
      this.httpserve.login();
      this.httpserve.getUsers().subscribe((respdata : any)=>{
        console.log(respdata);
        for(let mainuser in respdata){
          if(respdata[mainuser].username == rawdata.email){
            localStorage.setItem('id',respdata[mainuser].id);
            localStorage.setItem('name',respdata[mainuser].firstName);
            localStorage.setItem('dept',respdata[mainuser].department);
            localStorage.setItem('userid',respdata[mainuser].username);
            localStorage.setItem('role',respdata[mainuser].role)
            if(respdata[mainuser].role === 'Staff'){
              console.log(respdata[mainuser])
              localStorage.setItem('myKey', JSON.stringify(respdata[mainuser]))
              this.router.navigate(['/staffdash']);
              this.reactobj.reset();
            }else{
              localStorage.setItem('myKey', JSON.stringify(respdata[mainuser]))
              this.router.navigate(['./hoddashboard'])
            }
            // this.username = respdata[mainuser];
            // console.log(this.username)

            // if(respdata[mainuser].role == 'staff'){
            //   this.router.navigate(['/staffdash'])
            // }
          }
        }
       })
    })
  }
}

