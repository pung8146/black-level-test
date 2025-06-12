import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Black Level Test</h1>
      <p className="text-center max-w-md text-gray-700">
        테스트를 진행해보세요!
      </p>
      <Link href="/test">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          진단 시작하기
        </button>
      </Link>
    </main>
  );
}
