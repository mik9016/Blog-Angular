import { Component, OnInit } from '@angular/core';
import { BlogService } from "../blog.service";
import { ActivatedRoute } from '@angular/router';
import {BlogPost} from '../blog';

@Component({
  selector: 'blog-article-page',
  templateUrl:'./article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  public postId = this.activatedRoute.snapshot.params.id;
  public singlePost: Promise<BlogPost> = this.BlogService.getSinglePost(this.postId);
 

  constructor(private activatedRoute: ActivatedRoute,private BlogService:BlogService) { }

  ngOnInit(): void {

  }

}
