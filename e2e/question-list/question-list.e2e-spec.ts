import { ElementFinder } from 'protractor/built/element';
import { QuestionList } from './question-list.po';
import { QuestionListComponent } from '../../src/app/question-list/question-list.component';
import { WebElement } from 'selenium-webdriver';
import { by } from 'protractor';

describe('question-component', () => {
  let list: QuestionList;

  beforeEach(() => {
    list = new QuestionList();
  });

  it('it should fill the question list', () => {
    list.navigateTo();
    list.getFirstElementOfList().then(el => expect(el).toBeDefined());
  });

  it('it should show a green icon when question has an accepted answers', () => {
    list.navigateTo();
    list.getFirstElementOfList().then(el => {
      expect(el.element(by.tagName(`i`)).isPresent()).toBeTruthy();
      el.element(by.id(`is_answered_icon`)).getTagName().then(tag => expect(tag).toBe('i'));
    });
  });

  it('it should show a minus icon when question has not an accepted answers', () => {
    list.navigateTo();
    list.getList().then(el => {
      const listElement = <ElementFinder> el[2];
      expect(listElement.element(by.tagName(`i`)).isPresent()).toBeTruthy();
      listElement.element(by.id(`no_answers_icon`)).getTagName().then(tag => expect(tag).toBe('i'));
    });
  });

  it('it should show no icon when question has not any answers', () => {
    list.navigateTo();
    list.getList().then(el => {
      const listElement = <ElementFinder> el[1];
      expect(listElement.element(by.tagName(`i`)).isPresent()).toBeFalsy();
    });
  });
});
