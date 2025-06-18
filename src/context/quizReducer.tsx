import { QuizState, QuizAction } from "../types/quiz";

const LOCAL_STORAGE_KEY = "manual-quiz-state";

export const loadInitialQuizState = (): QuizState => {
  if (typeof window === "undefined")
    return { step: 0, answers: [], rejected: false };

  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) return JSON.parse(data);
  } catch (err) {
    console.error("Failed to parse quiz state from localStorage", err);
  }

  return { step: 0, answers: [], rejected: false };
};

export const quizReducer = (
  state: QuizState,
  action: QuizAction
): QuizState => {
  switch (action.type) {
    case "ANSWER_QUESTION": {
      const updatedAnswers = [...state.answers];
      const existingIndex = updatedAnswers.findIndex(
        (a) => a.questionIndex === action.payload.questionIndex
      );

      if (existingIndex !== -1) {
        updatedAnswers[existingIndex] = action.payload;
      } else {
        updatedAnswers.push(action.payload);
      }

      const isRejected = action.payload.selectedOption.isRejection;

      return {
        ...state,
        answers: updatedAnswers,
        rejected: isRejected ? true : state.rejected,
      };
    }

    case "GO_NEXT":
      return { ...state, step: state.step + 1 };

    case "GO_BACK":
      return { ...state, step: Math.max(0, state.step - 1) };

    case "RESET_QUIZ":
      if (typeof window !== "undefined") {
        localStorage.removeItem(LOCAL_STORAGE_KEY); // <-- CLEARING localStorage
      }
      return { ...state, step: 0, rejected: false };

    default:
      return state;
  }
};
