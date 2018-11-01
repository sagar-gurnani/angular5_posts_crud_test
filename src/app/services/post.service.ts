import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  currentURL: string = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private httpRequst:HttpClient,
  ) { }

  // For getting all Posts
  getAllPost(): Observable<Post[]> {
    return this.httpRequst.get<Post[]>(this.currentURL + 'posts');
  }

  //For getting perticulat Post details
  getPostDetails(postId:number): Observable<Post> {
    return this.httpRequst.get<Post>(this.currentURL + 'posts/'+ postId);
  }

  // Creating new Post
  addPost( postData : Post):Observable<Post> {
    return this.httpRequst.post<Post>(this.currentURL + 'posts', postData);
  }

  // Editing Post
  editPost( postData : Post, postId : number):Observable<Post> {
    return this.httpRequst.patch<Post>(this.currentURL + 'posts/'+ postId + '/', postData);
  }

  // Deleting Post
  deletePost( postId : number):Observable<any> {
    return this.httpRequst.delete(this.currentURL + 'posts/'+ postId);
  }
}
