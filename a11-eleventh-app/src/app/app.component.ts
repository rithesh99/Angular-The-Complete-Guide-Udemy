import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{ id: string }>(
        "https://ng-udemy-4e040-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .subscribe((posts) => {
        console.log(posts);
      });
    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isLoading = true;
    this.http
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
      )
      .subscribe((posts) => {
        console.log(posts);
        this.loadedPosts = posts;
        this.isLoading = false;
      });
  }
}
