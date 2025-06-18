import { QuizOption, QuizQuestion } from "@/types/quiz";

export const fetchQuizData = async () => {
  try {
    const response = await fetch("/api/questionnaires/972423.json");
    if (!response.ok) {
      throw new Error("Failed to fetch quiz data");
    }
    const data = await response.json();
    data.questions.forEach((question: QuizQuestion) => {
      question.options.forEach((option: QuizOption) => {
        option.parsedDisplay = parseHtmlDisplay(option.display);
      });
    });
    return data;
  } catch (err) {
    console.warn(
      "Failed to fetch quiz data from API, using fallback data:",
      err
    );
  } finally {
  }
};
const parseHtmlDisplay = (display: string) => {
  if (display.includes("<img")) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(display, "text/html");
    const img = doc.querySelector("img");

    if (img && img.src) {
      return {
        type: "image",
        src: img.src,
        alt: img.alt || "",
      };
    }
  }

  return {
    type: "text",
    content: display,
  };
};
