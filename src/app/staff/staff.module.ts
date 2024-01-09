import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const staffroutes : Routes = [
//   {path :'',component: StaffdashboardComponent,
//   children: [
//     {path : 'applyleave', component: ApplyLeaveComponent}
//   ]
// }
{path :'',component: StaffdashboardComponent},
{path : 'applyleave', component: ApplyLeaveComponent}
  

]

@NgModule({
  declarations: [
    StaffdashboardComponent,
    ApplyLeaveComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(staffroutes)
  ]
})
export class StaffModule { }
