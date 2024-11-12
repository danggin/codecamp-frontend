"use client";

import Link from "next/link";
import { useEffect } from "react";

const array = [];

export default function ImagePreloadPage() {
  useEffect(() => {
    const image = new Image();
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    image.onload = () => {
      array.push(image);
    };
  }, []);

  return (
    <Link href="/section31/31-15-image-preload-moved">페이지 이동하기</Link>
  );
}
