import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../Comment';
import { SuiAccordion, SuiAccordionPanel } from 'ng2-semantic-ui/dist';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-comment-list',
  template: `<sui-accordion [closeOthers]="false" *ngIf="!disabled; else noCommentsMsg">
  <sui-accordion-panel [isOpen]="!disabled">
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
</sui-accordion>
<ng-template #noCommentsMsg>No comments</ng-template>`
})
export class CommentListComponent implements OnInit {
  @Input() comments: Comment[];
  disabled: boolean = true;
  constructor() { }

  ngOnInit() {
    if (this.comments.length > 0) {
      this.disabled = false;
    }
  }

}
