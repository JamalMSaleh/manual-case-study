"use client";

import type { QuizQuestionProps } from "@/types/quiz";
import Image from "next/image";

export function QuizQuestionComponent({
  question,
  selectedOption,
  onOptionSelect,
}: QuizQuestionProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
          {question.question}
        </h1>
      </div>

      <div
        className={`grid gap-4 md:gap-6 max-w-3xl mx-auto ${
          question.options[0].parsedDisplay?.type === "image"
            ? "grid-cols-3"
            : ""
        }`}
      >
        {question.options.map((option, index) => {
          const displayData = option.parsedDisplay;
          const isSelected = selectedOption?.value === option.value;

          return (
            <button
              key={index}
              className={`p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200 ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
              onClick={() => onOptionSelect(option)}
            >
              {displayData?.type === "image" ? (
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative">
                    <Image
                      width={100}
                      height={100}
                      src={displayData.src || "/placeholder.svg"}
                      alt={displayData.alt || "Image"}
                      className="max-w-full h-auto max-h-32 object-contain"
                      crossOrigin="anonymous"
                    />
                    {isSelected && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <span
                    className={`text-lg font-medium ${
                      isSelected ? "text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {displayData.alt}
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span
                    className={`text-lg font-medium ${
                      isSelected ? "text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {displayData?.content}
                  </span>
                  {isSelected && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center ml-4">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
