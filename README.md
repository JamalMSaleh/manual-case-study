# Manual Landing Page Case Study

The goal is to build a responsive, single-page landing page using **Next.js (App Router)**. The page includes a full-screen quiz rendered dynamically from a remote JSON API and designed to help users determine if the product is right for them.

Live site: [https://manual-case-study-eosin.vercel.app/](https://manual-case-study-eosin.vercel.app/)

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **React** (with Context API)
- **TypeScript**
- **Tailwind CSS**
- **React Testing Library**
- **TT Norms** font (free version)

---

## ✨ Features

- **Responsive landing page** based on a provided Figma mockup
- **Mobile-first design**: Layout scales from small screens upwards
- **Full-screen quiz overlay** triggered via "Take the Quiz" CTA
- **Dynamic question loading** from an external JSON endpoint
- **Immediate rejection detection** via `isRejection` logic
- **Success message** if user completes all steps without rejection
- **Answer persistence** via `localStorage`—quiz progress is saved even if the user refreshes or leaves the page
- **Client-side state management** using React Context instead of Redux

---

## 🧠 State Management

The quiz logic is managed using the **React Context API**, which keeps track of:

- The current quiz step
- User-selected answers
- Result state (success or rejection)

All answers are also synced with `localStorage` to persist state between sessions.

---

## 🧪 Testing

This project uses **Jest** and **React Testing Library** to test UI interactions, reducer logic, and data fetching.

### ✅ What’s Covered

- **Quiz Component**: Simulates user flow, including rejection paths and progression logic.
- **Reducer**: Pure unit tests validate state transitions (`ANSWER_QUESTION`, `GO_NEXT`, `GO_BACK`, `RESET_QUIZ`).
- **API Parsing**: Tests `fetchQuizData()` for correct parsing of HTML-based options and graceful handling of failed fetches.

### 🧼 Setup Highlights

- `localStorage` is cleared before each test to ensure isolation.
- `global.fetch` is mocked for API tests.
- Tests run with `jest-dom` matchers for enhanced assertions.

### ▶️ Run Tests

```bash
npm test
```

## 🌐 Deployment

- Deployed via **Vercel** with automated builds and previews.
- Production URL: [https://manual-case-study-eosin.vercel.app/](https://manual-case-study-eosin.vercel.app/)

---

## ♿ Accessibility & Performance

- Semantic HTML and appropriate ARIA roles where necessary
- Full keyboard navigation supported
- Quiz images include `alt` text from the API
- Fast-loading SPA experience with minimal page transitions
- Built-in Next.js performance optimizations and lazy loading

---

## 📁 Assets & Fonts

- Design based on Figma:  
  [Landing Page Mockup](https://www.figma.com/file/6k8OY18TEGeO07Fpol86QM/Landing-Page---Exercise?node-id=1%3A2)
- TT Norms (free alternative):  
  [Download](https://font.download/font/tt-norms)

---

## 📄 Project Notes

- Built as a **single-page application**: no full-page reloads or navigation
- Improvised mobile layout due to lack of mobile Figma mocks
- Focused on balancing UX simplicity with technical clarity
- All Answers persist between sessions
## 🧾 Note

I used **GitHub Issues** and **PRs** to structure and document my development process.  
If you're reviewing this project, I highly recommend checking the **Issues tab** to follow my thought process, feature breakdown, and implementation decisions in context.
