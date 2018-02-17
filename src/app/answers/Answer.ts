import { AnswersEntity, CommentsEntity, Owner } from "../definitions/StackExchangeApi";

export class Answer implements AnswersEntity{
    comments?: CommentsEntity[];
    owner: Owner;
    is_accepted: boolean;
    score: number;
    last_activity_date: number;
    creation_date: number;
    answer_id: number;
    question_id: number;
    body: string;
    last_edit_date?: number;
    

}