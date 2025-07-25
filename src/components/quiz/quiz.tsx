"use client";

import { useEffect, useState } from "react";
import { QuizData, QuizOption } from "../../types/quiz";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import { QuizProgress } from "./quiz-progress";
import { QuizQuestionComponent } from "./quiz-question";
import QuizResult from "./quiz-result";
import { useQuiz } from "@/context/quizContext";

const Quiz = ({
  quizData,
  setShowQuiz,
}: {
  quizData: QuizData;
  setShowQuiz: (visible: boolean) => void;
}) => {
  const { state, dispatch } = useQuiz();
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizData.questions[state.step];

  const currentAnswer =
    state.answers.find((a) => a.questionIndex === state.step)?.selectedOption ||
    null;

  const handleOptionSelect = (option: QuizOption) => {
    dispatch({
      type: "ANSWER_QUESTION",
      payload: {
        questionIndex: state.step,
        selectedOption: option,
      },
    });

    if (option.isRejection) {
      setTimeout(() => {
        setShowResult(true);
      }, 300);
      return;
    }

    setTimeout(() => {
      if (state.step === quizData.questions.length - 1) {
        setShowResult(true);
        dispatch({ type: "GO_NEXT" });
      } else {
        dispatch({ type: "GO_NEXT" });
      }
    }, 300);
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setShowQuiz(false);
      return;
    }

    if (state.step > 0) {
      dispatch({ type: "GO_BACK" });
    } else {
      setShowQuiz(false);
    }
  };
  const handleNext = () => {
    if (showResult) {
      setShowResult(false);
      setShowQuiz(false);
      return;
    }

    if (state.step < 2) {
      dispatch({ type: "GO_NEXT" });
    } else {
      setShowQuiz(false);
    }
  };
  const handleRestart = () => {
    dispatch({ type: "RESET_QUIZ" });
    setShowResult(false);
  };

  useEffect(() => {
    console.log(state.step, currentAnswer, quizData.questions.length);
    if (state.step == quizData.questions.length) {
      setShowResult(true);
    }
  }, []);
  if (!quizData) return null;

  if (showResult) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          {(state.step > 0 || state.answers.length > 0) && (
            <div className="mb-8">
              <Button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="h-4 w-4" />
                Main Menu
              </Button>
            </div>
          )}
          <QuizResult isRejected={state.rejected} onRestart={handleRestart} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Progress */}
        <div className="mb-12">
          <QuizProgress
            currentQuestion={state.step}
            totalQuestions={quizData.questions.length}
          />
        </div>

        {/* Back button */}
        <div className="flex justify-between mb-8">
          <Button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            className={`${
              state.step == 2 || !currentAnswer ? "!hidden" : ""
            } flex items-center gap-2 text-gray-600 hover:text-gray-900`}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Question */}
        <div className="max-w-4xl mx-auto">
          <QuizQuestionComponent
            question={currentQuestion}
            selectedOption={currentAnswer}
            onOptionSelect={handleOptionSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
