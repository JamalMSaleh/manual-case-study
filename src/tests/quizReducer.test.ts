import { quizReducer } from "@/context/quizReducer";
import { QuizState, QuizAction, QuizAnswer, QuizOption } from "@/types/quiz";

describe("quizReducer", () => {
  const defaultState: QuizState = {
    step: 0,
    answers: [],
    rejected: false,
  };

  const mockOption = (value: string, isRejection = false): QuizOption => ({
    display: value,
    value,
    isRejection,
  });

  const answer = (questionIndex: number, option: QuizOption): QuizAnswer => ({
    questionIndex,
    selectedOption: option,
  });

  it("adds a new answer to empty state", () => {
    const action: QuizAction = {
      type: "ANSWER_QUESTION",
      payload: answer(0, mockOption("A")),
    };

    const newState = quizReducer(defaultState, action);

    expect(newState.answers).toHaveLength(1);
    expect(newState.answers[0]).toEqual(action.payload);
    expect(newState.rejected).toBe(false);
  });

  it("updates existing answer (same questionIndex)", () => {
    const initialState: QuizState = {
      ...defaultState,
      answers: [answer(0, mockOption("A"))],
    };

    const action: QuizAction = {
      type: "ANSWER_QUESTION",
      payload: answer(0, mockOption("B")),
    };

    const newState = quizReducer(initialState, action);

    expect(newState.answers).toHaveLength(1);
    expect(newState.answers[0].selectedOption.value).toBe("B");
  });

  it("preserves previous answers when adding a new one", () => {
    const initialState: QuizState = {
      ...defaultState,
      answers: [answer(0, mockOption("A"))],
    };

    const action: QuizAction = {
      type: "ANSWER_QUESTION",
      payload: answer(1, mockOption("B")),
    };

    const newState = quizReducer(initialState, action);

    expect(newState.answers).toHaveLength(2);
    expect(newState.answers[1].questionIndex).toBe(1);
  });

  it("marks quiz as rejected if selected option is a rejection", () => {
    const action: QuizAction = {
      type: "ANSWER_QUESTION",
      payload: answer(0, mockOption("Nope", true)),
    };

    const newState = quizReducer(defaultState, action);

    expect(newState.rejected).toBe(true);
  });

  it("GO_NEXT increments step", () => {
    const action: QuizAction = { type: "GO_NEXT" };
    const newState = quizReducer(defaultState, action);

    expect(newState.step).toBe(1);
  });

  it("GO_BACK decrements step (not below 0)", () => {
    const state = { ...defaultState, step: 2 };
    const newState = quizReducer(state, { type: "GO_BACK" });

    expect(newState.step).toBe(1);

    const zeroState = quizReducer(defaultState, { type: "GO_BACK" });
    expect(zeroState.step).toBe(0); // should not go below zero
  });

  it("RESET_QUIZ resets state and clears localStorage", () => {
    const spy = jest.spyOn(window.localStorage.__proto__, "removeItem");
    spy.mockImplementation(() => {}); // don't actually clear it

    const state: QuizState = {
      step: 3,
      answers: [answer(0, mockOption("X"))],
      rejected: true,
    };

    const newState = quizReducer(state, { type: "RESET_QUIZ" });

    expect(newState.step).toBe(0);
    expect(newState.answers).toEqual(state.answers); // unchanged
    expect(newState.rejected).toBe(false);
    expect(spy).toHaveBeenCalledWith("manual-quiz-state");

    spy.mockRestore();
  });
});
