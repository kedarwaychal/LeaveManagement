import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttphandlerService } from 'src/app/shared/http-handler.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { user } from 'src/app/interface/user';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent {
  department = localStorage.getItem('dept');


  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,private httpserve:HttphandlerService,private router : Router,public dialog: MatDialog) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      contact: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['HOD', Validators.required]
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      // Handle form submission here, e.g., sending data to the server
      console.log('Form submitted:', this.registrationForm.value);

      let obj1 = {
        username : this.registrationForm.value.username,
        password : this.registrationForm.value.password
      }
      let obj:user;
      obj=this.registrationForm.value
      obj.assignedLeaves = 10;
      obj.totalLeaves=10;
      obj.approvedleave = 0;
      obj.rejectedleave=0;
      obj.statusLeave='Pending';
      obj.id = this.registrationForm.value.username;
      this.httpserve.signUpNewUser(obj1).subscribe((rawdata:any)=>{
        this.httpserve.postuser(obj).subscribe((data:any)=>{
          console.log(data);
          console.log(rawdata)
      this.registrationForm.reset();

      this.httpserve.gethodstaffdet(this.department).subscribe((rawadata:any)=>{
        this.httpserve.hoddetails.next(rawadata)
      })

     });
      })
      this.router.navigate(['/viewleave']);
    } else {
      // Form is invalid, display validation errors
    }
  }





}
