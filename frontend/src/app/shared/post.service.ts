import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "./post-model";
import {CreatePostPayload} from "../post/create-post/create-post-payload";
import {share} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:9090/api/posts/');
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>("http://localhost:9090/api/posts/" + id);
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post("http://localhost:9090/api/posts/", postPayload).pipe(share());
  }

  getAllPostsByUser(name: string): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:9090/api/posts/by-user/' + name);
  }
}
