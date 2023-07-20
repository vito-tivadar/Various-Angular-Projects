import { Component, OnInit } from "@angular/core";
import { PostService } from "./../services/post.service";
import { AppError } from "./../common/errors/app-error";
import { NotFoundError } from "./../common/errors/not-found-error";
import { BadInput } from "../common/errors/bad-input.error";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent {
  posts: any;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe({
      next: (response) => (this.posts = response),
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = "";

    this.service.create({ isRead: true }).subscribe({
      next: (response: any) => (post.id = response.id),
      error: (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          // this.form.setErrors(error);
        } else throw error;
      },
    });
  }

  updatePost(post: any) {
    this.service.update(post).subscribe({
      next: (response) => console.log(response),
    });
    // this.http.put(this.serverURL, JSON.stringi fy(post))
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe({
      error: (error: AppError) => {
        if (error instanceof NotFoundError) alert("This post has already been deleted!");
        else {
          this.posts.splice(index, 0, post);
          throw error;
        }
      },
    });
  }
}
