import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Quiz from "@/components/quiz/quiz";
import { QuizProvider } from "@/context/quizContext";
import { QuizData } from "@/types/quiz";

const sampleQuizData: QuizData = {
  questions: [
    {
      question: "What is your favorite color?",
      type: "single",
      options: [
        {
          display: "Red",
          value: "red",
          isRejection: false,
          parsedDisplay: { type: "text", content: "Red" },
        },
        {
          display: "Blue",
          value: "blue",
          isRejection: true,
          parsedDisplay: { type: "text", content: "Blue" },
        },
      ],
    },
  ],
};

describe("Quiz", () => {
  const setShowQuiz = jest.fn();

  const renderQuiz = () =>
    render(
      <QuizProvider>
        <Quiz quizData={sampleQuizData} setShowQuiz={setShowQuiz} />
      </QuizProvider>
    );
  beforeEach(() => {
    localStorage.clear(); // <-- THIS FIXES THE PROBLEM
  });
  it("shows result immediately on rejection", async () => {
    renderQuiz();

    const blueOption = screen.getByText("Blue");
    await act(async () => {
      fireEvent.click(blueOption);
      await new Promise((res) => setTimeout(res, 350));
    });

    expect(screen.getByText(/Main Menu/i)).toBeInTheDocument();
  });
  it("renders first question and allows answering", async () => {
    renderQuiz();

    expect(
      screen.getByText("What is your favorite color?")
    ).toBeInTheDocument();

    const redOption = screen.getByText("Red");
    await act(async () => {
      fireEvent.click(redOption);
      await new Promise((res) => setTimeout(res, 350));
    });

    expect(screen.getByText(/Main Menu/i)).toBeInTheDocument();
  });
});
