import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../blogpost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit, OnDestroy {
  private querySub: any;
  post: BlogPost
  commentName: string;
  commentText: string;

  constructor(private pService : PostService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      this.pService.getPostByID(params['id']).subscribe(pService => this.post = pService);
     })
     
  }
  ngOnDestroy(): void {
    if (this.querySub) this.querySub.unsubscribe();
  }

  submitComment(): void {
    this.post.comments.push({ 
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    });
    this.pService.updatePostById(this.post._id, this.post).subscribe( () => {
      this.commentName = '';
      this.commentText = '';
    })
  }

}
