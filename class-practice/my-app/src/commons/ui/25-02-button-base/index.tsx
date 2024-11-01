"use client";

import styles from "./styles.module.css";
import { useFormContext } from "react-hook-form";

// 1. 버튼 뼈대 만들기
function ButtonBase(props) {
  const { children, className } = props;
  const { formState } = useFormContext();

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

export function ButtonSoftMFull(props) {
  return <ButtonBase className={styles.button_soft_m_full} {...props} />;
}

export function ButtonThinFitM(props) {
  return <ButtonBase className={styles.button_thin_fit_m} {...props} />;
}

export function ButtonCircleMM(props) {
  return <ButtonBase className={styles.button_circle_m_m} {...props} />;
}
