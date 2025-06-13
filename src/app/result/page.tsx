'use client';

import { useSearchParams } from 'next/navigation';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get('score') || '0', 10);
  const total = 4; // 질문 개수 고정 또는 props로 받을 수도 있음
  const isDanger = score >= Math.ceil(total * 0.6);

  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">진단 완료!</h2>
      <p className="mb-2">
        총 {total}문항 중 {score}문항에 &apos;예&apos;라고 답하셨습니다.
      </p>
      <p
        className={
          isDanger ? 'text-red-600 font-bold' : 'text-green-600 font-bold'
        }
      >
        {isDanger ? '블랙기업 위험군입니다. 주의하세요!' : '양호한 환경입니다.'}
      </p>
    </main>
  );
}
