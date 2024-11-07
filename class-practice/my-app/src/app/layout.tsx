import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/commons/layout";
import ApolloHeaderAndErrorSettingRefresh from "@/commons/settings/26-02-apollo-header-and-error-setting-refresh";
import ApolloHeaderSetting from "@/commons/settings/22-01-apollo-header-setting";
import ApolloHeaderSettingLocalstorage from "@/commons/settings/22-02-apollo-header-setting-localstorage";

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
        <ApolloHeaderAndErrorSettingRefresh>
          <Layout>{children}</Layout>
        </ApolloHeaderAndErrorSettingRefresh>
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
