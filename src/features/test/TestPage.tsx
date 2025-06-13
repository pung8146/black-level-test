// 8. /src/features/test/TestPage.tsx
'use client';

import { useRouter } from 'next/navigation';
import { questions } from './questions';
import { useTest } from './useTest';
import { useEffect } from 'react';

export default function TestPage() {
  const { score, currentIndex, answerYes, answerNo, isFinished } = useTest(
    questions.length
  );
  const router = useRouter();

  useEffect(() => {
    if (isFinished) {
      router.push(`/result?score=${score}`);
    }
  }, [isFinished, score, router]);

  if (isFinished) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h2 className="text-xl font-medium mb-6">
        질문 {currentIndex + 1} / {questions.length}
      </h2>
      <p className="text-lg mb-8">{questions[currentIndex]}</p>
      <div className="flex gap-4">
        <button
          onClick={answerYes}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          예
        </button>
        <button
          onClick={answerNo}
          className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          아니오
        </button>
      </div>
    </div>
  );
}
