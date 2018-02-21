import { QuestionList } from './question-list.po';
import { QuestionListComponent } from '../../src/app/question-list/question-list.component';
import { WebElement } from 'selenium-webdriver';

describe('question-component', () => {
  let list: QuestionList;

  beforeEach(() => {
    list = new QuestionList();
  });

  it('it should fill the question list', () => {
    list.navigateTo();
    list.getParagraphText().then(el => expect(el).toBeDefined());
  });
});
