import { LinearProgress } from "@mui/material";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export function QuizProgress({
  currentQuestion,
  totalQuestions,
}: QuizProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500">
          Step {currentQuestion + 1} of {totalQuestions}
        </span>
        <span className="text-sm font-medium text-gray-500">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <LinearProgress variant="determinate" value={progress} className="h-3" />
    </div>
  );
}
