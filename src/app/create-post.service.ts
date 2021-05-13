import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewPost,TestPost} from './blog';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  private url = "http://localhost:4000/";

  constructor(private httpClient: HttpClient) { }

  createNewPost(post:FormData){
   
    return this.httpClient.post<FormData>(this.url+'createpost',post).toPromise();
    
  }

  onUpload(selectedFile){
    const fd = new FormData();
    fd.append('image',selectedFile,selectedFile.name);

    console.log(selectedFile)
    this.httpClient.post(this.url+'testroute',fd,{responseType: 'text'}).subscribe(res => {
      console.log(res);
      
    })
    // this.httpClient.post(this.url+'createpost',fd).subscribe(res => {
    //   console.log(res);
      
    // })
  }

  createTestPost(post) {
    return this.httpClient.post<TestPost>(this.url + 'formbuilder',post).toPromise();
  }
}
