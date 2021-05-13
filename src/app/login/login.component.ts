import { Component, OnInit } from '@angular/core';
import { BlogService } from "../blog.service";
import {  FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import {LoginData} from '../blog';
import { Router } from '@angular/router';

 
@Component({
  selector: 'blog-login',
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedInMode: boolean = true;
  isLoading = false;

  

  constructor(private BlogService: BlogService,private formBuilder: FormBuilder, private router:Router) { }
 
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required,Validators.minLength(3)])
    })
  }


  onSwichMode(){
    this.isLoggedInMode = !this.isLoggedInMode;
  }
  postLoginData(){  
    this.isLoading = true;
    const user:LoginData = this.loginForm.getRawValue();

    this.BlogService.postUserLoginData(user);
    this.onSwichMode();
    this.loginForm.reset();
    this.isLoading = false;
    this.router.navigate(['/']);
  
  }

}
