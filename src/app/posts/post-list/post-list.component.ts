import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts: { title: string; content: string }[] = [];

  constructor() {
    this.posts = [];
    // this.posts = [
    //   { title: 'First post', content: 'First post' },
    //   { title: 'Second post', content: 'Second post' },
    //   { title: 'Third post', content: 'Third post' },
    // ];
  }

  onSubmitPost() {}
}
