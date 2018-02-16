// ApiStackexchangeQuestions
// generated from https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow
// using http://rest-area.firebaseapp.com 
export interface ApiStackexchangeQuestions {
    items: ApiStackexchangeItems[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
  }
  // ApiStackexchangeItems
  export interface ApiStackexchangeItems {
    tags: (string)[];
    owner: ApiStackexchangeOwner;
    is_answered: boolean;
    view_count: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    last_edit_date?: number | null;
    question_id: number;
    link: string;
    title: string;
    closed_date?: number | null;
    closed_reason?: string | null;
    accepted_answer_id?: number | null;
  }
  // ApiStackexchangeOwner
  export interface ApiStackexchangeOwner {
    reputation: number;
    user_id: number;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
    accept_rate?: number | null;
  }
  
  
  