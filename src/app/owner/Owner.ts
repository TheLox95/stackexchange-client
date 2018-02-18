import { Owner as  OwnerEntity} from "../definitions/StackExchangeApi";

export class Owner implements OwnerEntity{
		
	private _user_id: number;
    private _user_type: string;
    private _profile_image: string;
    private _display_name: string;
    private _link: string;
	private _accept_rate?: number;
	private _reputation: number;

	constructor(user_id: number, user_type: string, profile_image: string, display_name: string, link: string) {
		this._user_id = user_id;
		this._user_type = user_type;
		this._profile_image = profile_image;
		this._display_name = display_name;
		this._link = link;
	}
	

	public get reputation(): number {
		return this._reputation;
	}


	public get user_id(): number {
		return this._user_id;
	}

	public get user_type(): string {
		return this._user_type;
	}

	public get profile_image(): string {
		return this._profile_image;
	}

	public get display_name(): string {
		return this._display_name;
	}

	public get link(): string {
		return this._link;
	}
}