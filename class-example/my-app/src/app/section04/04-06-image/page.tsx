"use client";
import Image from "next/image";

import styles from "./styles.module.css";

export default function ImagePage() {
  return (
    <>
      <img className={styles.image} src="/images/00-image2.jpg" alt="" />
      <Image
        src="/images/00-image2.jpg"
        className={styles.image}
        alt={""}
        width={0}
        height={0}
        sizes="100vww"
      />
    </>
  );
}
