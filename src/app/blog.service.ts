import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { BlogPost, LoginData, RegisterData, MyBlogPost } from "./blog";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  // private url = "http://localhost:4000/";
  private url = "https://blog-backend-angular-wsb.herokuapp.com/";

  private token: string;
  private authStatusListener = new Subject<boolean>();
  public registeredUserName: string;
  private isAuthenticated = false;
  private tokenTimer: any;
  public isLoading: boolean = false;
  public myPosts;

  constructor(private httpClient: HttpClient, private router: Router) {}

  

  getPosts() {
    this.isLoading = true;
    return this.httpClient.get(this.url).toPromise();

  }

  getSinglePost(id: string): Promise<BlogPost> {
    this.isLoading = true;
    // console.log(this.url + id);
    return this.httpClient.get<BlogPost>(this.url + id).toPromise();
  }

  getMySinglePost(id: string): Promise<MyBlogPost> {
    this.isLoading = true;
    return this.httpClient
      .get<MyBlogPost>(this.url + "myposts/" + id)
      .toPromise();
  }

  deleteMySinglePost(id: number) {
    this.isLoading = true;
    return this.httpClient
      .delete<BlogPost>(this.url + "myposts/" + id)
      .toPromise();
  }

  getMyPosts() {
    this.isLoading = true;
    return this.httpClient.get(this.url + "myposts").toPromise();
  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  logout() {
    this.token = null;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }

  //Login method
  postUserLoginData(loginData: LoginData) {
    return this.httpClient
      .post<{ token: string; name: string; expiresIn: number }>(
        this.url + "login",
        loginData
      )
      .subscribe((res) => {
        const token = res.token;
        this.registeredUserName = res.name;
        console.log("registered name blog service: " + this.registeredUserName);
        this.token = token;
        if (token) {
          const expiresInDuration = res.expiresIn;
          console.log(expiresInDuration);
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          this.saveAuthData(token, expirationDate, res.name);
          console.log(expirationDate);
          this.router.navigate(["/"]);
        }
      });
  }

  postUserRegisterData(data: RegisterData) {
    return this.httpClient
      .post<RegisterData>(this.url + "register", data)
      .toPromise();
  }

  private setAuthTimer(duration: number) {
    console.log("setting Timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private saveAuthData(token: string, expirationDate: Date, userName: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userName", userName);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userName");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
    };
  }
}
