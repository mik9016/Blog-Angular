import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import { Form, FormBuilder, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { RegisterData } from '../blog';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

 
  constructor(private BlogService:BlogService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required,Validators.minLength(3)])
    })
  }
  getRegisteredUserData(){
  
  }

  postRegisterData(){
    const registerUser:RegisterData = this.registerForm.getRawValue();
    this.BlogService.postUserRegisterData(registerUser).then(res=>{console.log(res)});
    this.registerForm.reset();
    this.router.navigate(['/login']);
  }
}
