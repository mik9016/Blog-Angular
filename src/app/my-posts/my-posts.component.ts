import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';


@Component({
  selector: 'blog-my-posts',
  templateUrl:'./my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {
  
  public posts = this.BlogService.getMyPosts();
  // private url = "http://localhost:4000/";
  private url = 'https://blog-backend-angular-wsb.herokuapp.com/';
  public loggedUser: string;
  public postId;
  public isLoading = this.BlogService.isLoading;

  constructor(private BlogService: BlogService) { }

 

  ngOnInit(): void {
    this.posts;
    this.turnOffSpinner();
    this.loggedUser = localStorage.getItem('userName');
    
  }
 

 


  getPosts(){
   return this.BlogService.getMyPosts();
  }

  onDeleteItem(id){
   
    this.BlogService.deleteMySinglePost(id).then(res => {
      console.log(this.posts);
      this.isLoading = true;
      this.posts = this.getPosts();
    
      
    
    
    }).then(ok => this.turnOffSpinner());
 
  }

  async turnOffSpinner() {
    await this.posts;
    this.isLoading = false;
  }
}
