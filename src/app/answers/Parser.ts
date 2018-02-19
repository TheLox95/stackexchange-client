import { Answer } from "./Answer";
import OwnerParser from "../owner/Parser";
import CommentParser from "../question/comment/Parser";
import { AnswersEntity } from "../definitions/StackExchangeApi";

export default class Parser {
  parse(entity: AnswersEntity) {
    const ownerParser = new OwnerParser();
    const commentParser = new CommentParser();
    return new Answer(
      ownerParser.parse(entity.owner),
      entity.is_accepted,
      entity.score,
      entity.last_activity_date,
      entity.creation_date,
      entity.answer_id,
      entity.question_id,
      entity.body,
      entity.comments.map(commentParser.parse)
    );
  }
}
