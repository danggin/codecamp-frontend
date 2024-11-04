"use client";

import { HTMLInputTypeAttribute } from "react";
import styles from "./styles.module.css";
import { FieldValues, useFormContext, Path } from "react-hook-form";

interface IInputBaseProps<P> {
  type: HTMLInputTypeAttribute;
  keyname: Path<P>;
  className?: string;
}

function InputBase<G extends FieldValues>(props: IInputBaseProps<G>) {
  const { type, keyname, className } = props;
  const { register } = useFormContext<G>();

  return (
    <input
      type={type}
      {...register(keyname)}
      className={`${className} ${styles.input_base}`}
    />
  );
}

export function InputSoftSFull<I extends FieldValues>(
  props: IInputBaseProps<I>
) {
  return <InputBase<I> className={styles.input_soft_s_full} {...props} />;
}
