import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blogpost';
import { PostService } from '../post.service';
@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  blogPosts: Array<BlogPost>;
  private latestPosts;
  constructor(private data : PostService) { }

  ngOnInit(): void {
    this.latestPosts = this.data.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3));
  }

}
