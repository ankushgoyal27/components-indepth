import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[] = [];
  constructor() { }

  ngOnInit() {
    this.blogPost.push(new BlogPost('Blog Post 1', 'Summary 1'));
    this.blogPost.push(new BlogPost('Blog Post 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum. Mauris tempor ex sit amet orci ultricies venenatis. Donec fringilla massa id elit aliquam tristique. Donec nec augue ante. Fusce sagittis massa malesuada, facilisis est nec, accumsan leo.Vivamus elit orci, malesuada sed odio vitae, ullamcorper tristique lacus. Maecenas eu consequat magna, sit amet facilisis magna. Donec vitae diam eu leo commodo auctor. Nullam vestibulum odio non fermentum ullamcorper. Praesent ac mi et velit auctor ullamcorper. Sed facilisis gravida ante, quis laoreet mi venenatis sed. Duis aliquam elit at aliquam varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet odio tristique ligula porta sagittis. Vestibulum finibus porttitor tortor, at ultrices sem auctor id. Aliquam lacinia dui elit, sed egestas lectus fermentum posuere. Nam laoreet vitae sem hendrerit pellentesque. Ut a ex quam.'));
  }

}
