import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blot-post-tile',
  templateUrl: './blot-post-tile.component.html',
  styleUrls: ['./blot-post-tile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BlotPostTileComponent implements OnInit {

  @Input() post: BlogPost;
  fullSummary: string;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
  }

  showFullSummary(){
    this.post.summary = this.fullSummary;
    
  }

}
