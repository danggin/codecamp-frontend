"use client";

import Link from "next/link";

export default function KakaoMapRoutingPage() {
  return (
    <>
      {/* SPA - router.push, Link 등  */}
      <Link href="/section29/29-02-kakao-map-routing-moved">지도보기</Link>
      <br />
      <br />
      {/* MPA - location.href, a 등 */}
      <a href="/section29/29-02-kakao-map-routing-moved">지도보기</a>
    </>
  );
}
