"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 border border-gray-300 rounded-xl shadow-sm bg-white ">
        <main className="flex flex-col items-center text-center space-y-6 h-[500px]">
          <h1 className="text-3xl font-bold text-gray-900">Black Level Test</h1>
          <p className="text-gray-700 leading-relaxed">
            테스트를 진행해보세요!
          </p>
          <Link href="/test">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              진단 시작하기
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
}
