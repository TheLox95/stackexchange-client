import { CommentsEntity, Owner } from "../definitions/StackExchangeApi";

export class Comment implements CommentsEntity{
    owner: Owner;
    edited: boolean;
    score: number;
    creation_date: number;
    post_id: number;
    comment_id: number;
    body: string;
    reply_to_user?: Owner;

}