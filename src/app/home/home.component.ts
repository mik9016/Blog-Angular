import { Component, OnInit } from "@angular/core";
import { BlogService } from "../blog.service";
@Component({
  selector: "blog-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  private url = "http://localhost:4000/";
  public posts = this.BlogService.getMyPosts();

  constructor(private BlogService: BlogService) {}

  ngOnInit(): void {
    this.posts;
  }
}
