// src/app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className="flex flex-col items-center justify-center 
      bg-gray-50 text-gray-900 min-h-screen border border-gray-300 rounded-xl shadow-sm bg-white w-[500px] h-[800px] m-auto"
      >
        {children}
      </body>
    </html>
  );
}
