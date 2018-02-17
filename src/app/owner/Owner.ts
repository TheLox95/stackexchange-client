import { Owner as  OwnerEntity} from "../definitions/StackExchangeApi";

export class Owner implements OwnerEntity{
    reputation: number;
    user_id: number;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
    accept_rate?: number;

}