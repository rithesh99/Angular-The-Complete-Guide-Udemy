import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    // Send Http request
    this.http
      .post<{ id: string }>(
        "https://ng-udemy-4e040-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          this.error.next(error.error.error);
        }
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
