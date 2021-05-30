import { Component, OnInit } from "@angular/core";
import { BlogService } from "../blog.service";
@Component({
  selector: "blog-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  // private url = "http://localhost:4000/";
  private url = "https://blog-backend-angular-wsb.herokuapp.com/";
  public posts = this.BlogService.getMyPosts();
  public isLoading = this.BlogService.isLoading;
  constructor(private BlogService: BlogService) {}

  ngOnInit(): void {
    this.posts;

    this.turnOffSpinner();
  }

  async turnOffSpinner() {
    await this.posts;
    this.isLoading = false;
  }
}
