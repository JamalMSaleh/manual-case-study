export interface QuizOption {
  display: string;
  value: string | boolean;
  isRejection: boolean;
  parsedDisplay?: {
    type: string;
    src?: string;
    alt?: string;
    content?: string;
  };
}

export interface QuizQuestion {
  question: string;
  type: string;
  options: QuizOption[];
}

export interface QuizData {
  questions: QuizQuestion[];
}

export interface QuizAnswer {
  questionIndex: number;
  selectedOption: QuizOption;
}
export interface QuizQuestionProps {
  question: QuizQuestion;
  selectedOption: QuizOption | null;
  onOptionSelect: (option: QuizOption) => void;
}
export type QuizState = {
  step: number;
  answers: QuizAnswer[];
  rejected: boolean;
};
export type QuizAction =
  | { type: "ANSWER_QUESTION"; payload: QuizAnswer }
  | { type: "GO_NEXT" }
  | { type: "GO_BACK" }
  | { type: "RESET_QUIZ" };
