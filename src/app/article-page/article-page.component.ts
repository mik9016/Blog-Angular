import { Component, OnInit } from '@angular/core';
import { BlogService } from "../blog.service";
import { ActivatedRoute } from '@angular/router';
import {BlogPost,MyBlogPost} from '../blog';

@Component({
  selector: 'blog-article-page',
  templateUrl:'./article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  public postId = this.activatedRoute.snapshot.params.id;
  public singlePost: Promise<MyBlogPost> = this.BlogService.getMySinglePost(this.postId);

 

  constructor(private activatedRoute: ActivatedRoute,private BlogService:BlogService) { }

  ngOnInit(): void {
    this.singlePost;
    console.log(this.singlePost)
  }

}
