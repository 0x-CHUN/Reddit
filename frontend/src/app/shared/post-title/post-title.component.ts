import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../post-model";
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {

  @Input()
  data!: Array<PostModel>;

  faComments = faComments;

  constructor(private router: Router, private postService: PostService) {
    this.postService.getAllPosts().subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

  goToPost(id: number) {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
