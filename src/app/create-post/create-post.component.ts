import { Component, OnInit } from "@angular/core";
import { CreatePostService } from "../create-post.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BlogService } from "../blog.service";
import { Router } from "@angular/router";

@Component({
  selector: "blog-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  postBuilder: FormGroup;
  postElements: Array<FormGroup> = [];
  imgUrl: string = "";

  selectedFile: File = null;
  constructor(
    private formBuilder: FormBuilder,
    private CreatePostService: CreatePostService,
    private BlogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postBuilder = this.formBuilder.group({
      mainTitle: "",
      mainSubtitle: "",
      mainText: "",
      image: [null],
    });
  }

  createPost() {
    this.postElements.push(this.postBuilder);
  }

  sendNewPost() {
    const fd = new FormData();
    fd.append("name", localStorage.getItem('userName'));
    fd.append("photo", this.postBuilder.get("image").value);
    fd.append("mainTitle", this.postBuilder.get("mainTitle").value);
    fd.append("mainSubtitle", this.postBuilder.get("mainSubtitle").value);
    fd.append("mainText", this.postBuilder.get("mainText").value);

    this.CreatePostService.createNewPost(fd).then((res) => {console.log(res)
      this.router.navigate(["/myposts"]);});
    
  }

  onFileSelected(event) {
    // create image view in Preview card
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.imgUrl = event.target.result;
      };
    }
    //save image in formbuilder
    const file = event.target.files[0];
    this.postBuilder.patchValue({
      image: file,
    });
    this.postBuilder.get("image").updateValueAndValidity();
  }
}
