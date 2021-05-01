import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';


@Component({
  selector: 'blog-my-posts',
  templateUrl:'./my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {
  
  public posts = this.BlogService.getMyPosts();

  constructor(private BlogService: BlogService) { }

 

  ngOnInit(): void {
    this.posts;
    console.log(this.posts);
  }

  getPosts(){
    this.BlogService.getMyPosts().then(res => {console.log(res)});
  }
}
