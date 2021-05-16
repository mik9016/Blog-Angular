import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';


@Component({
  selector: 'blog-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
}) 
export class AppComponent implements OnInit {
  title = 'blog';
  constructor(private blogService:BlogService){}
  ngOnInit() {
    this.blogService.autoAuthUser();
  }
}
