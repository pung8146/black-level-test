// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 text-gray-900">
        <div className="flex justify-center min-h-screen bg-gray-50">
          <div className="w-full max-w-md p-4 border border-gray-300 rounded-xl shadow-sm bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
