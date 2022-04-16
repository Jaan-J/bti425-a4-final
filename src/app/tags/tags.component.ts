import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Array<string>;
  private tag;

  constructor(private pService : PostService) { }

  ngOnInit(): void {
    this.tag = this.pService.getTags().subscribe(pService => this.tags = pService);
  }

}
