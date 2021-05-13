import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { BlogPost,LoginData,RegisterData ,MyBlogPost} from "./blog";


@Injectable({
  providedIn: "root",
})
export class BlogService {
  private url = "http://localhost:4000/";
  private token: string;
  private authStatusListener = new Subject<boolean>();
  public registeredUserName: string;

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
    //  console.log(this.url + 'myposts');
    return this.httpClient.get(this.url + 'myposts').toPromise();
  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  logout(){
    this.token = null;
    this.authStatusListener.next(false)

  }

  postUserLoginData(loginData:LoginData){
  
    return this.httpClient.post<{token: string,name:string}>(this.url+'login',loginData).subscribe(res =>{
      const token = res.token;
      this.registeredUserName = res.name;
      this.token = token;
      this.authStatusListener.next(true);
      console.log(this.registeredUserName);
    });
  }

  postUserRegisterData(data:RegisterData){
    return this.httpClient.post<RegisterData>(this.url+'register',data).toPromise();
  }
}
