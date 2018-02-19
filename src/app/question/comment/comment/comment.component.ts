import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../Comment';

@Component({
  selector: 'app-comment',
  template: `<div class="comment">
  <a class="avatar">
    <img src="{{comment.owner.profile_image}}">
  </a>
  <div class="content">
    <a class="author" target="_blank" [href]="comment.owner.link">{{comment.owner.display_name}}</a>
    <div class="metadata">
      <span class="date">{{comment.creation_date * 1000 | date}}</span>
    </div>
    <div class="text" [innerHtml]="comment.body"></div>
  </div>
</div>`
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
