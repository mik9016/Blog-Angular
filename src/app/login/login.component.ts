import { Component, OnInit } from '@angular/core';
import { BlogService } from "../blog.service";

 
@Component({
  selector: 'blog-login',
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email:string = "";
  password:string = "";
  loginData = {
    userEmail:"",
    userPassword:""
  }
  constructor(private BlogService: BlogService) { }
 
  ngOnInit(): void {
  }

  getLoginData(){
      this.loginData.userEmail = this.email;
      this.loginData.userPassword = this.password;
      
  }

  postLoginData(loginData){  
   
    this.BlogService.postUserLoginData(loginData).then(res =>console.log(res));
    
  }

}
