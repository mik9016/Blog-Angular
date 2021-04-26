import { Component, OnInit } from '@angular/core';


 
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
  constructor() { }
 
  ngOnInit(): void {
  }

  getLoginData(){
      this.loginData.userEmail = this.email;
      this.loginData.userPassword = this.password;
      console.log(this.loginData);
  }

}
