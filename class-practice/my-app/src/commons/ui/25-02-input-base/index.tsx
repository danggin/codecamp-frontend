"use client";

import styles from "./styles.module.css";
import { useFormContext } from "react-hook-form";

function InputBase(props) {
  const { type, keyname, className } = props;
  const { register } = useFormContext();

  return (
    <input
      type={type}
      {...register(keyname)}
      className={`${className} ${styles.input_base}`}
    />
  );
}

export function InputSoftSFull(props) {
  return <InputBase className={styles.input_soft_s_full} {...props} />;
}
