import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BlogPost } from "./blog";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  private url = "http://localhost:4000/";

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get(this.url).toPromise();
  }

  getSinglePost(id: string): Promise<BlogPost> {
    console.log(this.url + id);
    return this.httpClient.get<BlogPost>(this.url + id).toPromise();
  }
}
