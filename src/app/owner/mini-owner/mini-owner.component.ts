import { Component, OnInit, Input } from "@angular/core";
import { Owner } from "../Owner";

@Component({
  selector: "app-mini-owner",
  template: `<div class="image">
  <img src="{{owner.profile_image}}">
  </div>
  <div class="content">
    <a class="header" target="_blank" href="{{owner.link}}" [innerHtml]="owner.display_name"></a>
  </div>`
})
export class MiniOwnerComponent implements OnInit {
  @Input() owner: Owner;

  constructor() {}

  ngOnInit() {}
}
