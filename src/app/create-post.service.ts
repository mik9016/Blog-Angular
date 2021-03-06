import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CreatePostService {
  // private url = "http://localhost:4000/";
  private url = 'https://blog-backend-angular-wsb.herokuapp.com/'

  constructor(private httpClient: HttpClient) {}

  createNewPost(post: FormData) {
    return this.httpClient
      .post<FormData>(this.url + "createpost", post)
      .toPromise();
  }
}
