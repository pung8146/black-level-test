// 6. /src/features/test/TestPage.tsx
'use client';

import { questions } from './questions';
import { useTest } from './useTest';

export default function TestPage() {
  const { score, currentIndex, answerYes, answerNo, isFinished, isDanger } =
    useTest(questions.length);

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-8">
        <h2 className="text-2xl font-semibold mb-4">진단 완료!</h2>
        <p className="mb-2">
          총 {questions.length}문항 중 {score}문항에 &apos;예&apos;라고
          답하셨습니다.
        </p>
        <p
          className={
            isDanger ? 'text-red-600 font-bold' : 'text-green-600 font-bold'
          }
        >
          {isDanger
            ? '블랙기업 위험군입니다. 주의하세요!'
            : '양호한 환경입니다.'}
        </p>
      </div>
    );
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
