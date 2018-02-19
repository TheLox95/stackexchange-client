import { ApiStackexchangeItems } from "../definitions/StackExchangeApi";
import { Question } from "./Question";
import OwnerParser from "../owner/Parser";
import CommentParser from "./comment/Parser";
import AnswerParser from "../answers/Parser";

export default class Parser {
  parse(item: ApiStackexchangeItems) {
    const ownerParser = new OwnerParser();
    const commentParser = new CommentParser();
    const answerParser = new AnswerParser();
    return new Question(
      item.question_id,
      item.body,
      ownerParser.parse(item.owner),
      item.tags,
      item.is_answered,
      item.view_count,
      item.answer_count,
      item.score,
      item.last_activity_date,
      item.creation_date,
      item.link,
      item.title,
      item.comments.map(commentParser.parse),
      item.answers.map(answerParser.parse),
      item.accepted_answer_id,
      item.last_edit_date
    );
  }
}
