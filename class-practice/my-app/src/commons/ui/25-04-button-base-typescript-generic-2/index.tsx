"use client";

import styles from "./styles.module.css";
import { FieldValues, useFormContext } from "react-hook-form";

interface IButtonBaseProps<P> {
  children: React.ReactNode;
  className?: string;
}

// 1. 버튼 뼈대 만들기
function ButtonBase<B extends FieldValues>(props: IButtonBaseProps<B>) {
  const { children, className } = props;
  const { formState } = useFormContext<B>();

  return (
    <button
      className={`${className} ${styles.button_base}`}
      disabled={!formState.isValid}
    >
      {children}
    </button>
  );
}

// 2. 버튼 찍어내기

export function ButtonSoftMFull<B extends FieldValues>(
  props: IButtonBaseProps<B>
) {
  return <ButtonBase<B> className={styles.button_soft_m_full} {...props} />;
}

export function ButtonThinFitM<B extends FieldValues>(
  props: IButtonBaseProps<B>
) {
  return <ButtonBase<B> className={styles.button_thin_fit_m} {...props} />;
}

export function ButtonCircleMM<B extends FieldValues>(
  props: IButtonBaseProps<B>
) {
  return <ButtonBase<B> className={styles.button_circle_m_m} {...props} />;
}
