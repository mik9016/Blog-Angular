import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewPost} from './blog';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  private url = "http://localhost:4000/";

  constructor(private httpClient: HttpClient) { }

  createNewPost(post:NewPost){
    return this.httpClient.post<NewPost>(this.url+'createpost',post).toPromise();
  }
}
