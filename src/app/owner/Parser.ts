import {Owner} from './Owner';
import { Owner as OwnerEntity } from './../definitions/StackExchangeApi.d';

export default class Parser {
  parse(item: OwnerEntity){
    return new Owner(item.user_id, item.user_type, item.profile_image, item.display_name, item.link);
  }
}
