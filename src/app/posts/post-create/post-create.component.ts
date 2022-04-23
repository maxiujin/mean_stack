import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  newPost = 'NO content';
  enteredContent = '';
  enteredTitle = '';
  comment: string = '';
  onAddPost() {
    const post = {
      enteredTitle: this.enteredTitle,
      enteredContent: this.enteredContent,
    };
  }
}
