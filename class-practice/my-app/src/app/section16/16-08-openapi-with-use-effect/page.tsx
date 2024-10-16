"use client";

import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const getDogImage = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();

      setImageURL(data.message);
    };

    getDogImage();
  }, []);

  return <img src={imageURL} />;
}
