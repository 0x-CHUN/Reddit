import {Component, OnInit} from '@angular/core';
import {PostModel} from "../../shared/post-model";
import {PostService} from "../../shared/post.service";
import {ActivatedRoute} from "@angular/router";
import {throwError} from "rxjs";
import {CommentPayload} from "../../comment/comment-payload";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../../comment/comment.service";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  post!: PostModel;
  postId!: number;
  commentForm!: FormGroup;
  commentPayload!: CommentPayload;
  comments!: Array<CommentPayload>;

  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.postId = this.activateRoute.snapshot.params.id;
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    })
    this.commentPayload = {
      text: '',
      postId: this.postId,
    }
  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost();
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text')?.value;
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text')?.setValue('');
      this.getCommentsForPost();
    }, error => {
      throwError(error);
    });
  }

  private getPostById() {
    this.postService.getPost(this.postId).subscribe(data => {
      this.post = data;
    }, error => {
      throwError(error);
    });
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }
}
