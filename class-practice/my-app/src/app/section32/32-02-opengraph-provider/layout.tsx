"use client";

export default function OpengraphProviderHead({ children }) {
  return (
    <>
      <meta property="og:title" content="여행마켓" />
      <meta property="og:description" content="환영합니다!" />
      <meta property="og:image" content="" />
      <>{children}</>
    </>
  );
}
