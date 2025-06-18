"use client";

import FeaturesSection from "@/components/landing/FeaturesSection";
import FooterSection from "@/components/landing/FooterSection";
import HeroSection from "@/components/landing/HeroSection";
import Quiz from "@/components/quiz/quiz";
import { fetchQuizData } from "@/services/quizService";
import { QuizData } from "@/types/quiz";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<QuizData>({} as QuizData);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuizData();
      setQuizData(data);
    };

    fetchData();
  }, []);
  return (
    <>
      {!showQuiz ? (
        <div>
          <HeroSection setShowQuiz={setShowQuiz} />
          <div className="mt-20">
            <FeaturesSection />
          </div>
          <div className="mt-20">
            <FooterSection />
          </div>
        </div>
      ) : (
        <Quiz quizData={quizData} setShowQuiz={setShowQuiz} />
      )}
    </>
  );
}
