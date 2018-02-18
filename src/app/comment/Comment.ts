import { CommentsEntity, Owner } from "../definitions/StackExchangeApi";

export class Comment implements CommentsEntity{
	private _edited: boolean;
    private _score: number;
    private _creation_date: number;
    private _post_id: number;
    private _comment_id: number;
    private _body: string;
    private _reply_to_user?: Owner;

	constructor(owner: Owner, edited: boolean, score: number, creation_date: number, post_id: number, comment_id: number, body: string) {
		this._owner = owner;
		this._edited = edited;
		this._score = score;
		this._creation_date = creation_date;
		this._post_id = post_id;
		this._comment_id = comment_id;
		this._body = body;
	}

	public get owner(): Owner {
		return this._owner;
	}
    private _owner: Owner;

	public get edited(): boolean {
		return this._edited;
	}

	public get score(): number {
		return this._score;
	}

	public get creation_date(): number {
		return this._creation_date;
	}

	public get post_id(): number {
		return this._post_id;
	}

	public get comment_id(): number {
		return this._comment_id;
	}

	public get body(): string {
		return this._body;
	}
    

}