import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../Comment';
import { SuiAccordion, SuiAccordionPanel } from 'ng2-semantic-ui/dist';

@Component({
  selector: 'app-comment-list',
  template: `<sui-accordion [closeOthers]="false">
  <sui-accordion-panel [isOpen]="true">
  <div title>
      <i class="dropdown icon"></i>
      Comments
  </div>
  <div content>
  <div class="ui comments" *ngFor="let comment of comments">
  <app-comment [comment]="comment"></app-comment>
  </div>
  </div>
  </sui-accordion-panel>
  </sui-accordion>`
})
export class CommentListComponent implements OnInit {
  @Input() comments: Comment[];

  constructor() { }

  ngOnInit() {
  }

}
