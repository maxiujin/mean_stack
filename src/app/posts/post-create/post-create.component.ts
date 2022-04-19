import { Component } from "@angular/core";

@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',

})

export class PostCreateComponent {
newPost = 'NO content';
enteredValue='';
comment:string ='';
onAddPost(){

  this.newPost = this.enteredValue;
}

}
