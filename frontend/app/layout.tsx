import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LIVINGON | 생활의 기준을 다시",
  description: "주방·생활가전과 렌탈을 한 곳에서 만나는 프리미엄 라이프숍"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
