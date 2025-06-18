"use client";

import { CheckCircle, Circle } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

interface QuizResultProps {
  isRejected: boolean;
  onRestart: () => void;
}

const QuizResult = ({ isRejected, onRestart }: QuizResultProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="space-y-6">
        <div className="flex justify-center">
          {isRejected ? (
            <Circle className="h-20 w-20 text-red-500" />
          ) : (
            <CheckCircle className="h-20 w-20 text-green-500" />
          )}
        </div>

        <h1
          className={`text-3xl md:text-4xl font-bold ${
            isRejected ? "text-red-700" : "text-green-700"
          }`}
        >
          {isRejected ? "Unable to Prescribe" : "Great News!"}
        </h1>
      </div>

      <div className="space-y-6">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto">
          {isRejected
            ? "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication."
            : "Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!"}
        </p>

        {!isRejected ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {" "}
            <Link
              className="  
            !px-7 
            !py-4 
            rounded-md 
            font-medium 
            normal-case"
              href="https://www.manual.co"
              target="_blank"
            >
              Visit Manual.co
            </Link>
            <Button
              onClick={onRestart}
              className="
            !text-text-primary
            !px-7 
            !py-4 
            rounded-md 
            !font-semibold
            normal-case"
            >
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={onRestart}
              className="
           !bg-button-primary 
            !text-white 
            hover:!bg-button-hover 
            active:!bg-button-active 
            !px-7 
            !py-4 
            rounded-md 
            font-medium 
            normal-case"
            >
              Restart Quiz
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default QuizResult;
