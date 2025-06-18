"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { quizReducer } from "@/context/quizReducer";
import { QuizState, QuizAction } from "@/types/quiz";

const LOCAL_STORAGE_KEY = "manual-quiz-state";

const defaultState: QuizState = {
  step: 0,
  answers: [],
  rejected: false,
};

type QuizContextType = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(quizReducer, defaultState);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data) as QuizState;
        for (const answer of parsed.answers) {
          dispatch({
            type: "ANSWER_QUESTION",
            payload: answer,
          });
        }
        if (parsed.step > 0) {
          for (let i = 0; i < parsed.step; i++) {
            dispatch({ type: "GO_NEXT" });
          }
        }
      }
    } catch (e) {
      console.error("Failed to load from localStorage:", e);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    }
  }, [state, isReady]);

  if (!isReady) return null;

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within a QuizProvider");
  return context;
};
