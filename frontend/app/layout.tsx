import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "별빛재 | 오늘의 마음을 읽는 곳",
  description: "별과 계절의 언어로 만나는 나의 오늘"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

