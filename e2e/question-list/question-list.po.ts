import { browser, by, element } from 'protractor';
import { ElementFinder } from 'protractor/built/element';
import { promise } from 'selenium-webdriver';

export class QuestionList {
  navigateTo() {
    return browser.get('/questions');
  }

  getFirstElementOfList(): promise.Promise<ElementFinder> {
    return element.all(by.css(`#questionList`)).then(elements => elements[0]);
  }

  getList() {
    return element.all(by.css(`#questionList`));
  }
}
