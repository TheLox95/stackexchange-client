import { browser, by, element } from 'protractor';

export class QuestionList {
  navigateTo() {
    return browser.get('/questions');
  }

  getParagraphText() {
    return element.all(by.css('#questionList li')).then(elements => elements[1]);
      /*.findElements(by.tagName('li'))
      .then(function (links) {
        return links[1]
        //place expects here, otherwise it will run async and your expects will be hit 
        //before the lookup
      });*/
  }
}
