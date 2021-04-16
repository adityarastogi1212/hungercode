import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from '../WebService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: any;
  flag: any;
  name:any;
  demoname:any;

  constructor(private api:WebService , private router:Router) { }

  userData=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    firstName:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
});

  ngOnInit(): void {
    this.api.retriveRegister(this.userData).subscribe(response=>this.data=response);
  }

  submitData2() {

    this.demoname=this.retrieveUsername2();
    if(this.demoname!=""){
      this.api.retriveRegister(this.userData).subscribe(response=>this.data=response);
      this.flag=1;
      // setTimeout(() => this.router.navigate(['login']),2000);
    }
    
  }

  retrieveUsername2()
  {
    this.name = this.userData.value.username;
    return this.name;
  }

}
