import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuestionService } from "./question.service";
import {
  SuiModule,
  ModalTemplate,
  SuiModalService,
  TemplateModalConfig
} from "ng2-semantic-ui";

export interface IContext {
  data: string;
}

@Component({
  selector: "app-question",
  template: `
    <p>
      question works!
    </p>
    <p [innerHtml]="_question?.title" (click)="open()">
    </p>
    <p [innerHtml]="_question?.body">
    </p>
    <ng-template let-context let-modal="modal" #modalTemplate>
    <div class="header">Example</div>
    <div class="content">
        <p>{{ context.data }}</p>
    </div>
    <div class="actions">
        <button class="ui red button" (click)="modal.deny('denied')">Cancel</button>
        <button class="ui green button" (click)="modal.approve('approved')" autofocus>OK</button>
    </div>
</ng-template>
  `,
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent {
  @ViewChild("modalTemplate")
  public modalTemplate: ModalTemplate<IContext, string, string>;
  _question;

  constructor(
    private route: ActivatedRoute,
    private service: QuestionService,
    public modalService: SuiModalService
  ) {
    this.route.params.subscribe(id => this.fetchQuestion(id));
  }

  fetchQuestion(value: { [key: string]: any }) {
    this.service
      .get(value.id)
      .subscribe(question => this._question = question);

  }

  public open(dynamicContent: string = "Example") {
    const config = new TemplateModalConfig<IContext, string, string>(
      this.modalTemplate
    );

    config.closeResult = "closed!";
    config.context = { data: dynamicContent };

    this.modalService
      .open(config)
      .onApprove(result => {
        /* approve callback */
      })
      .onDeny(result => {
        /* deny callback */
      });
  }
}
