import { Component, OnInit } from "@angular/core";
import { PostComponent } from "../post/post.component";
import { BlogService } from "../blog.service";
@Component({
  selector: "blog-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
 
  public posts = this.BlogService.getPosts();

  constructor(private BlogService: BlogService) {}

  ngOnInit(): void {
    this.posts;
    console.log(this.posts)
  }
}
