import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from '../WebService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  flag: any;
  name: any;
  demoname:any;
  
  constructor(private api:WebService , private router:Router) {}

  userData=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
  });

  ngOnInit(): void {
    //to remove undefined status error used in html
    // if(this.retrieveUsername()!=""){
    //   this.api.retriveLogin(this.userData).subscribe(response=>this.data=response);
    // }
    this.api.retriveLogin(this.userData).subscribe(response=>this.data=response);
  }

  submitData1(pageName:string): void {

    this.demoname=this.retrieveUsername1();
    if(this.demoname!=""){

      this.api.retriveLogin(this.userData).subscribe(response=>this.data=response);
      this.flag=1;
      setTimeout(() => {
        if(this.data.status==true){
            //this.name = this.userData.value.username;
            console.log(this.retrieveUsername1());
            this.router.navigate([`${pageName}`]);
          }
        else{
            this.router.navigate(['register']);
        }
        },2000);
    }
    
    //this.router.navigate([`${this.name}/${pageName}`]);
  }

  //this.forName()
  // forName() {
  //   if(this.data.status==true){
  //     this.name = this.userData.value.username;
  //     console.log(this.name);
  //   }
  // }
  retrieveUsername1()
  {
    this.name = this.userData.value.username;
    return this.name;
  }
  
}
