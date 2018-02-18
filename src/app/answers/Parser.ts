import { Answer } from "./Answer";
import OwnerParser from "../Owner/parser";
import { AnswersEntity } from "../definitions/StackExchangeApi";

export default class Parser {
  parse(entity: AnswersEntity) {
    const parser = new OwnerParser();
    return new Answer(
      parser.parse(entity.owner),
      entity.is_accepted,
      entity.score,
      entity.last_activity_date,
      entity.creation_date,
      entity.answer_id,
      entity.question_id,
      entity.body
    );
  }
}
