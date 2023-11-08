import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../api.service';
import { HttphandlerService } from '../../shared/http-handler.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddstaffComponent } from '../addstaff/addstaff.component';

@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent implements OnInit {

  department = localStorage.getItem('dept');
  leaveArr = [];
  staffarr: any;
  searchTerm: string = '';
  members: any[] = [];
  defaultPageSize: number = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) sort!: MatSort;


  displayedColumns: string[] = ['Employeeid', 'username', 'Email', 'Contact', 'action'];
  dataSource!: MatTableDataSource<any>;

  constructor(private api: ApiService, private httpserve: HttphandlerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getdata();
    this.getdatailsstaff();
    this.httpserve.hoddetails.subscribe((param: any) => {
      this.members = param;
      this.dataSource = new MatTableDataSource(this.members);
      console.log(this.members)
    })
  }

  getdata() {
    this.httpserve.getleavedataofhod(this.department).subscribe((params: any) => {
      console.log(params)
    })
  }
  deleteuser(id: number) {
    console.log(id)
    this.httpserve.deleteuser(id).subscribe((res) => {
      alert('Do you want to delete this user');
      this.getdatailsstaff();
    })
  }

  getdatailsstaff() {
    this.httpserve.gethodstaffdet(this.department).subscribe((param: any) => {
      this.members = param;
      this.dataSource = new MatTableDataSource(this.members);
      this.dataSource.paginator = this.paginator;
      console.log(this.members)
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(AddstaffComponent, {
      width: '500px',
      height: '500px'
    });
  }
  // search() {
  //    this.members =  this.members.filter((member:any) =>{
  //     return member.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   });
  // }
}
