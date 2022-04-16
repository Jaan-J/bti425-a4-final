import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPost } from '../blogpost';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  blogPost: BlogPost;
  tags: string;
  private post;

  constructor(private pSerivce : PostService, private router :Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.post = this.pSerivce.getPostByID(this.route.snapshot.params['id']).subscribe(pSerivce => {
      this.blogPost = pSerivce; 
      this.tags = pSerivce.tags.toString();
    })
  }

  ngOnDestroy() {
    if (this.post) this.post.unsubscribe();
  }

  formSubmit(): void {
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.pSerivce.updatePostById(this.blogPost._id, this.blogPost).subscribe( () => this.router.navigate(['/admin']));
  }

  
  deletePost(id) {
    this.pSerivce.deletePostById(id).subscribe( () => this.router.navigate(['/admin']));
  }

}
