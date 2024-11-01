"use client";

import { useFormContext } from "react-hook-form";

export default function Input({ type, keyname }) {
  const { register } = useFormContext();

  return <input type={type} {...register(keyname)} />;
}
