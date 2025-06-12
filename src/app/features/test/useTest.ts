// /src/features/test/useTest.ts
import { useState } from 'react';

export function useTest(total: number) {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const answerYes = () => {
    setScore((prev) => prev + 1);
    setCurrentIndex((prev) => prev + 1);
  };

  const answerNo = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const reset = () => {
    setScore(0);
    setCurrentIndex(0);
  };

  const isFinished = currentIndex >= total;

  return {
    score,
    currentIndex,
    answerYes,
    answerNo,
    reset,
    isFinished,
    isDanger: score >= Math.ceil(total * 0.6),
  };
}
