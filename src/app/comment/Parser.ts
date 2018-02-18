import { CommentsEntity } from "../definitions/StackExchangeApi";
import OwnerParser from "../Owner/parser";
import {Comment} from "./Comment";


export default class Parser{

  parse(item: CommentsEntity){
    const parser = new OwnerParser();
    return new Comment(parser.parse(item.owner), item.edited, item.score, item.creation_date, item.post_id, item.comment_id, item.body);
  }
}
