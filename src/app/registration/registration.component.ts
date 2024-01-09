import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttphandlerService } from '../shared/http-handler.service';
import { Router } from '@angular/router';
import { user } from '../interface/user';
import { restname } from '../shared/restrictedvalue.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,private httpserve:HttphandlerService,private router : Router) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required,Validators.minLength(3)]],
      lastName: ['', Validators.required],
      contact: ['', [Validators.required,Validators.pattern('^[0-9]{10}$'),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['HOD', Validators.required]
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm);

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
        this.httpserve.postuser(obj).subscribe((data:user)=>{
          console.log(rawdata);
          console.log(data)
        });
      })
      this.registrationForm.reset()
      this.router.navigate(['/login'])
    } else {
      // Form
    }
  }

}
