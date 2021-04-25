import { Component, OnInit } from "@angular/core";
import { PostComponent } from "../post/post.component";

@Component({
  selector: "blog-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
