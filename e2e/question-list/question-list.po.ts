import { browser, by, element } from 'protractor';

export class QuestionList {
  navigateTo() {
    return browser.get('/questions');
  }

  getFirstElementOfList() {
    return element.all(by.css(`#questionList`)).then(elements => elements[1]);
  }
}
