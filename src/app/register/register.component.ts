import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'blog-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name:string="";
  email:string="";
  password:string="";

  registerUserData= {
    userName:"",
    userEmail:"",
    userPassword:""
  }
  constructor() { }

  ngOnInit(): void {
  }
  getRegisteredUserData(){
    this.registerUserData.userName = this.name;
    this.registerUserData.userEmail = this.email;
    this.registerUserData.userPassword = this.password;
    console.log(this.registerUserData);
  }
}
