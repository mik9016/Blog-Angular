import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';


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
  constructor(private BlogService:BlogService) { }

  ngOnInit(): void {
  }
  getRegisteredUserData(){
    this.registerUserData.userName = this.name;
    this.registerUserData.userEmail = this.email;
    this.registerUserData.userPassword = this.password;
    console.log(this.registerUserData);
  }

  postRegisterData(registerData){
    return this.BlogService.postUserRegisterData(registerData).then(res=>{console.log(res)});
  }
}
