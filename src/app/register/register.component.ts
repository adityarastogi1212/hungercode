import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  

  submitData2() {

    this.demoname=this.retrieveUsername2();
    if(this.demoname!=""){
      this.api.retriveRegister(this.userData).subscribe(response=>this.data=response);
      this.flag=1;
      // setTimeout(() => this.router.navigate(['login']),2000);
      // setTimeout(() => {
      //   if(this.data.status==true){
      //       //this.name = this.userData.value.username;
      //       console.log(this.retrieveUsername2());
      //       if(confirm("Registered Successfully")) {}
      //     }
      //   else{
      //       if(confirm("User Exists")) {}
      //     }
      //   },2000);
    }
    
  }

  retrieveUsername2()
  {
    this.name = this.userData.value.username;
    return this.name;
  }

}
