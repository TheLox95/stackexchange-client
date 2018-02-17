export interface ApiStackexchangeQuestions {
  items?: (ApiStackexchangeItems)[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
export interface ApiStackexchangeItems {
  tags?: (string)[];
  comments?: (CommentsEntity)[] | null;
  answers?: (AnswersEntity)[] | null;
  owner: Owner;
  is_answered: boolean;
  view_count: number;
  accepted_answer_id?: number | null;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date?: number | null;
  question_id: number;
  link: string;
  title: string;
  body: string;
}
export interface CommentsEntity {
  owner: Owner;
  edited: boolean;
  score: number;
  creation_date: number;
  post_id: number;
  comment_id: number;
  body: string;
  reply_to_user?: Owner | null;
}
export interface Owner {
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
  accept_rate?: number | null;
}

export interface AnswersEntity {
  comments?: (CommentsEntity)[] | null;
  owner: Owner;
  is_accepted: boolean;
  score: number;
  last_activity_date: number;
  creation_date: number;
  answer_id: number;
  question_id: number;
  body: string;
  last_edit_date?: number | null;
}
