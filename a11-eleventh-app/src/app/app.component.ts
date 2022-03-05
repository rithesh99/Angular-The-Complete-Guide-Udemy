import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @ViewChild("postForm") formData: NgForm;

  loadedPosts: Post[] = [];
  isLoading: boolean = false;
  error: string = null;
  errorSubcription: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
    this.errorSubcription = this.postsService.error.subscribe((error) => {
      this.error = "ERROR: " + error;
    });
  }

  ngOnDestroy() {
    this.errorSubcription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createPost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.error = error.error.error;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.clearPosts().subscribe(
      (posts) => {
        this.loadedPosts = [];
        console.log("Response from API ", posts);
      },
      (error) => {
        this.error = error.error.error;
      }
    );
  }
}
