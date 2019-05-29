import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlotPostTileComponent } from '../blot-post-tile/blot-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[][];
  currentPage: number;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlotPostTileComponent>;
  
  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPost = this.blogDataService.getData(); 
  }

  updatePage(newPage){
    console.log("Event Emitted in Angular");
    this.currentPage = newPage;
  }

  expandAll(){
    this.blogPostTileComponents
    .forEach(e=>e.showFullSummary());
  }
}
