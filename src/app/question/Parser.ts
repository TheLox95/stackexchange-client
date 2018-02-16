import { ApiStackexchangeItems } from '../definitions/StackExchangeApi';
import { Question } from './Question';


export default class Parser{

    parse(item :ApiStackexchangeItems){
        const question = new Question();
        question.title = item.title;
        question.is_answered = item.is_answered;
        question.view_count = item.view_count;
        question.score = item.score;
        question.last_activity_date = item.last_activity_date;
        question.question_id = item.question_id;
        question.link = item.link;
        question.creation_date = item.creation_date;

        return question;

    }
}