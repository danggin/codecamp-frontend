import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ApolloUploadSetting from "@/commons/settings/18-01-apollo-upload-setting";
import Layout from "@/commons/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface IRootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Home Page",
  description: "안녕하세요",
};

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ApolloUploadSetting>
          <Layout>{children}</Layout>
        </ApolloUploadSetting>
      </body>
    </html>
  );
}

/**
 *
 * [ Next 실행 순서 ]
 *
 * 1. 주소창에 주소 입력
 * => https://localhost:3000/
 *
 * 2. 입력된 주소 안의 page.tsx 찾기
 * => app/page.tsx
 * (ex. 주소 /mypage => app/mypage/page.tsx 찾기)
 *
 * 3. 해당 페이지 컴포넌트를 통채로 props에 넣어서 실행하기
 * <RootLayout children={pageComponent}/>
 */
