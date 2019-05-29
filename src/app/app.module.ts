import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlotPostTileComponent } from './blot-post-tile/blot-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { BlogDataService } from './blog-data.service';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlotPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TruncatePipe,
    BlogDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
