import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BlogPost,LoginData,RegisterData ,MyBlogPost} from "./blog";


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
    // console.log(this.url + id);
    return this.httpClient.get<BlogPost>(this.url + id).toPromise();
  }

  getMySinglePost(id: string): Promise<MyBlogPost> {
    // console.log(this.url + id);
    return this.httpClient.get<MyBlogPost>(this.url + 'myposts/' + id).toPromise();
  }

  getMyPosts(){
     console.log(this.url + 'myposts');
    return this.httpClient.get(this.url + 'myposts').toPromise();
  }


  postUserLoginData(data:LoginData){
    
    return this.httpClient.post<LoginData>(this.url+'login',data).toPromise();
  }

  postUserRegisterData(data:RegisterData){
    return this.httpClient.post<RegisterData>(this.url+'register',data).toPromise();
  }
}
