import { Component } from "@angular/core";

@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']

})

export class PostCreateComponent {
newPost = 'NO content';
enteredValue='';
comment:string ='';
onAddPost(){

  this.newPost = this.enteredValue;
}

}
