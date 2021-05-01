import { Component, OnInit } from "@angular/core";
import { ParagraphsList, NewPost } from "../blog";
import {CreatePostService} from '../create-post.service';

@Component({
  selector: "blog-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  title: string = "";
  subTitle: string = "";
  text: string = "";
  paragraphTitle: string = "";
  paragraphtext: string = "";
  paragraphsList: Array<ParagraphsList> = [];
  postElements: Array<NewPost> = [];
  

  constructor(private CreatePostService: CreatePostService) {}

  ngOnInit(): void {}

  createPost() {
    if (this.postElements.length !== 0) {
      this.postElements[0].mainTitle = this.title;
      this.postElements[0].mainSubtitle = this.subTitle;
      return;
    }
    this.postElements.push({
      mainTitle: this.title,
      mainSubtitle: this.subTitle,
      photo: "../assets/comp.jpg",
      paragraphs: this.paragraphsList,
    });
  }

  createParagraph() {
    this.paragraphsList.push({
      paragraph: {
        title: this.paragraphTitle,
        text: this.paragraphtext,
      },
    });
  }

  sendNewPost(data){
   console.log(data)
   this.CreatePostService.createNewPost(data).then(res =>console.log(res));
  }
}
