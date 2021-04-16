import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../WebService';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  //display=false;
  username:any;

  constructor(private service: WebService,private router:Router) { }

  ngOnInit(): void {
    
  }

  setStatus(){
    // this.display=this.service.data;
    //console.log("hi!"+this.service.giveStatus());
    if(this.service.giveStatus()==true){
      this.username=this.service.retreiveUsername();}
    return this.service.giveStatus();
  }

  logout(){
    this.router.navigate(['login'])
    .then(() => {
      window.location.reload();
    });  }

}

