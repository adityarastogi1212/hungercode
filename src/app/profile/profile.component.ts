import { Component, OnInit } from '@angular/core';
import { WebService } from '../WebService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData:any;
  // flag=0;
  // n=[1];
  //data:any;

  constructor(private api:WebService) { }

  ngOnInit(): void {
    //this.api.retrieveUserProfile().subscribe(response=>this.profileData=response);
    //setTimeout(() => console.log(this.profileData),2000);
    //setTimeout(() => this.api.retrieveUserProfile().subscribe(response=>this.profileData=response),2000);
    //console.log(this.profileData);
    this.api.retrieveUserProfile().subscribe(response=>this.profileData=response)
    console.log(this.profileData);
    //this.flag=1;
  }

  //data = this.getProfileData();

  // getProfileData()
  // {
    
  //   // this.api.retrieveUserProfile().subscribe(response=>this.profileData=response)
  //   // console.log(this.profileData);
  //   //this.flag=1;
  //   return this.profileData;
  // }



}
