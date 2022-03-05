import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    // Send Http request
    return this.http.post<{ id: string }>(
      "https://ng-udemy-4e040-default-rtdb.firebaseio.com/posts.json",
      postData
    );
  }

  fetchPosts() {
    return this.http
      .get<{ [id: string]: Post }>(
        "https://ng-udemy-4e040-default-rtdb.firebaseio.com/posts.json"
      )
      .pipe(
        map((data: { [id: string]: Post }) => {
          var results: Post[] = [];
          for (let i in data) {
            results.push({ ...data[i], id: i });
          }
          return results;
        })
      );
  }

  clearPosts() {
    return this.http.delete<{ [id: string]: Post }>(
      "https://ng-udemy-4e040-default-rtdb.firebaseio.com/posts.json"
    );
  }
}
