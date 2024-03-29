import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData(): BlogPost[][]{
    return [
      [
        {
          title: 'Post 1',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        },
        {
          title: 'Post 2',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        }
      ],
      [
        {
          title: 'Post 1',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        },
        {
          title: 'Post 2',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        }
      ],
      [
        {
          title: 'Post 3',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        },
        {
          title: 'Post 4',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        }
      ],
      [
        {
          title: 'Post 5',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        },
        {
          title: 'Post 6',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        }
      ],
      [
        {
          title: 'Post 7',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        },
        {
          title: 'Post 8',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit id lorem ac pellentesque. Sed sed tortor eleifend, lobortis enim vel, pharetra metus. Vestibulum ut nulla quis ex ornare tempor volutpat a odio. Cras vitae euismod urna. Quisque egestas lobortis ipsum sed blandit. Aenean faucibus mi neque. Nulla ac consectetur justo. Mauris placerat dapibus imperdiet. Donec ut lacinia mi. Sed tempus pharetra lacus, eget convallis nulla malesuada ut. Nulla id vulputate dolor. Aliquam at ornare enim. Nunc tincidunt leo felis, vitae rhoncus lectus venenatis quis. Etiam molestie ex vel suscipit mollis. Ut eu tempor metus. Vestibulum varius vel arcu at sodales. Donec lectus tortor, pretium eget risus non, dapibus sollicitudin tellus. In nec tortor purus. Vestibulum elit nibh, tempor quis sollicitudin eu, accumsan id ipsum.'
        }
      ]
    ];
  }
}
