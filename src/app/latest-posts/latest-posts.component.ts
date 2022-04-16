import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blogpost';
import { PostService } from '../post.service';
@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  blogPosts: Array<BlogPost>;
  private latestPosts;
  constructor(private pService : PostService) { }

  ngOnInit(): void {
    this.latestPosts = this.pService.getPosts(1, null, null).subscribe(pService => this.blogPosts = pService.slice(0,3));
  }

}
