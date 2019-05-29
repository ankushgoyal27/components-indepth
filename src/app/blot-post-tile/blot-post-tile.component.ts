import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blot-post-tile',
  templateUrl: './blot-post-tile.component.html',
  styleUrls: ['./blot-post-tile.component.scss']
})
export class BlotPostTileComponent implements OnInit {

  @Input() post: BlogPost;
  
  constructor() { }

  ngOnInit() {
  }

}
