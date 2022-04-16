import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
  categories: Array<any>;

  private cat;
  constructor(private pService: PostService) { }

  ngOnInit(): void {
    this.cat = this.pService.getCategories().subscribe(pService => this.categories = pService);
  }

}
