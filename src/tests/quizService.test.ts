import { fetchQuizData } from "@/services/quizService";

// Mock fetch globally
global.fetch = jest.fn();

describe("fetchQuizData", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns data when fetch is successful", async () => {
    const mockData = {
      questions: [
        {
          options: [
            { display: "<img src='img.png' alt='desc' />" },
            { display: "Text option" },
          ],
        },
      ],
    };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchQuizData();
    expect(data).toEqual(mockData);
    expect(data.questions[0].options[0].parsedDisplay).toEqual({
      type: "image",
      src: "http://localhost/img.png",
      alt: "desc",
    });
    expect(data.questions[0].options[1].parsedDisplay).toEqual({
      type: "text",
      content: "Text option",
    });
  });

  it("throws error when fetch fails", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });
    await expect(fetchQuizData()).resolves.toBeUndefined();
  });
});