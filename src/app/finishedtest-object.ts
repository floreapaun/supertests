export interface FinishedTestObj {
  _id: string;
  time_started: string;
  time_finished: string;
  correct_ansers: number;
  blank_answers: number;
  user: { _id: string, username: string };
  test: { _id: string, name: string };
  __v: number;
}
