import { useState } from 'react';

export function useTest(total: number) {
  const [score, setScore] = useState(0);

  const answerYes = () => setScore((prev) => prev + 1);
  const reset = () => setScore(0);

  return { score, answerYes, reset, isDanger: score >= Math.ceil(total * 0.6) };
}
