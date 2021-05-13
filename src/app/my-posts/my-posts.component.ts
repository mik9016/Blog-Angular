import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';


@Component({
  selector: 'blog-my-posts',
  templateUrl:'./my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {
  
  public posts = this.BlogService.getMyPosts();
  private url = "http://localhost:4000/";
  public loggedUser: string;

  constructor(private BlogService: BlogService) { }

 

  ngOnInit(): void {
    this.posts;
    this.loggedUser = this.BlogService.registeredUserName;
  }


  getPosts(){
    this.BlogService.getMyPosts().then(res => {console.log(res)});
  }
}
