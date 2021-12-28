import { QuestionItem } from 'src/app/question-item';
export interface TestItem {
    _id: string;
    name: string;
    duration: string;
    __v: number;
    questions: Array < QuestionItem >;
}
