import { Component, OnInit } from '@angular/core';
import { HttphandlerService } from '../shared/http-handler.service';
import { user } from '../interface/user';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit{

  posts! : user[];
  searchtext = '';

  constructor(private httpserve:HttphandlerService){}

  ngOnInit(){

    this.httpserve.gettabledetails().subscribe((rawdata : any)=>{
          this.posts = rawdata;
          console.log(this.posts)
    })

  }



  onclick(){
    console.log(this.posts)
    this.posts = this.posts.filter((data :any)=>{
      return data.firstName.toLowerCase().includes(this.searchtext.toLowerCase())
    })
  }

closemodal(){
  console.log("modal Closed successfully !!")
}


}
