import {
  ApiStackexchangeItems,
  CommentsEntity,
  AnswersEntity,
  Owner
} from "../definitions/StackExchangeApi";

export class Question implements ApiStackexchangeItems {
  private _question_id: number;
  private _body: string;
  private _comments?: CommentsEntity[];
  private _answers?: AnswersEntity[];
  private _owner: Owner;
  private _accepted_answer_id?: number;
  private _last_edit_date?: number;
  private _tags: string[];
  private _is_answered: boolean;
  private _view_count: number;
  private _answer_count: number;
  private _score: number;
  private _last_activity_date: number;
  private _creation_date: number;
  private _link: string;
  private _title: string;

  constructor(
    question_id: number,
    body: string,
    owner: Owner,
    tags: string[],
    is_answered: boolean,
    view_count: number,
    answer_count: number,
    score: number,
    last_activity_date: number,
    creation_date: number,
    link: string,
    title: string,
    comments?: CommentsEntity[],
    answers?: AnswersEntity[],
    accepted_answer_id?: number,
    last_edit_date?: number
  ) {
    this._owner = owner;
    this._tags = tags;
    this._is_answered = is_answered;
    this._view_count = view_count;
    this._answer_count = answer_count;
    this._score = score;
    this._last_activity_date = last_activity_date;
    this._creation_date = creation_date;
    this._link = link;
    this._title = title;
    this._comments = comments;
    this._answers = answers;
    this._accepted_answer_id = accepted_answer_id;
    this._last_edit_date = last_edit_date;
    this._question_id = question_id;
		this._body = body;
  }


	public get owner(): Owner {
		return this._owner;
	}

	public get tags(): string[] {
		return this._tags;
	}

	public get is_answered(): boolean {
		return this._is_answered;
	}

	public get view_count(): number {
		return this._view_count;
	}

	public get answer_count(): number {
		return this._answer_count;
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

	public get link(): string {
		return this._link;
	}

	public get title(): string {
		return this._title;
  }

  public get comments(): CommentsEntity[] {
		return this._comments;
  }

  public get answers(): AnswersEntity[] {
		return this._answers;
  }

  public get accepted_answer_id(): number {
		return this._accepted_answer_id;
  }

  public get last_edit_date(): number {
		return this._last_edit_date;
  }

  public get question_id(): number {
    return this._question_id;
  }

	public get body(): string {
		return this._body;
	}
}
