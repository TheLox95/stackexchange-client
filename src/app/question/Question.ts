export class Question {

    private _tags: string[];
    private _is_answered: boolean;
    private _view_count: number;
    private _answer_count: number;
    private _score: number;
    private _last_activity_date: number;
    private _creation_date: number;
    private _id: number;
    private _link: string;
    private _title: string;

	public get body(): string {
		return this._body;
	}

	public set body(value: string) {
		this._body = value;
	}
    private _body: string;

	public get tags(): string[] {
		return this._tags;
	}

	public set tags(value: string[]) {
		this._tags = value;
	}
    

	public get is_answered(): boolean {
		return this._is_answered;
	}

	public set is_answered(value: boolean) {
		this._is_answered = value;
	}
    

	public get view_count(): number {
		return this._view_count;
	}

	public set view_count(value: number) {
		this._view_count = value;
	}
    

	public get answer_count(): number {
		return this._answer_count;
	}

	public set answer_count(value: number) {
		this._answer_count = value;
	}
    

	public get score(): number {
		return this._score;
	}

	public set score(value: number) {
		this._score = value;
	}
    

	public get last_activity_date(): number {
		return this._last_activity_date;
	}

	public set last_activity_date(value: number) {
		this._last_activity_date = value;
	}
    

	public get creation_date(): number {
		return this._creation_date;
	}

	public set creation_date(value: number) {
		this._creation_date = value;
	}
    

	public get question_id(): number {
		return this._id;
	}

	public set question_id(value: number) {
		this._id = value;
	}
    

	public get link(): string {
		return this._link;
	}

	public set link(value: string) {
		this._link = value;
	}
    

	public get title(): string {
		return this._title;
	}

	public set title(value: string) {
		this._title = value;
	}
    
}