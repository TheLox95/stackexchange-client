import { AnswersEntity, CommentsEntity, Owner } from "../definitions/StackExchangeApi";
	
export class Answer implements AnswersEntity{
    private _comments?: CommentsEntity[];
    private _owner: Owner;
    private _is_accepted: boolean;
    private _score: number;
    private _last_activity_date: number;
    private _creation_date: number;
    private _answer_id: number;
    private _question_id: number;
    private _body: string;
    private _last_edit_date?: number;

    constructor(owner: Owner, is_accepted: boolean, score: number, last_activity_date: number, creation_date: number, answer_id: number, question_id: number, body: string) {
		this._owner = owner;
		this._is_accepted = is_accepted;
		this._score = score;
		this._last_activity_date = last_activity_date;
		this._creation_date = creation_date;
		this._answer_id = answer_id;
		this._question_id = question_id;
		this._body = body;
	}

	public get owner(): Owner {
		return this._owner;
	}

	public get is_accepted(): boolean {
		return this._is_accepted;
	}

	public get score(): number {
		return this._score;
	}

	public get last_activity_date(): number {
		return this._last_activity_date;
	}

	public get creation_date(): number {
		return this._creation_date;
	}

	public get answer_id(): number {
		return this._answer_id;
	}

	public get question_id(): number {
		return this._question_id;
	}

	public get body(): string {
		return this._body;
	}

}