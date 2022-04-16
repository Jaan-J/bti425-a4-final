import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../blogpost';
@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit, OnDestroy {
  blogPosts: Array<BlogPost> = [];
  private posts;
  constructor(private pService:PostService, private router:Router) { }

  ngOnInit(): void {
    this.posts = this.pService.getAllPosts().subscribe(pService => this.blogPosts = pService);
  }

  btnClicked(e, id) {
    this.router.navigate(['/admin/post', id]);
  }

  ngOnDestroy() {
    if (this.posts) this.posts.unsubscribe();
  }

}
