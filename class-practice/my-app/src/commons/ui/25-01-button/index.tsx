"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

export default function Button({ children }: { children: React.ReactNode }) {
  const { formState } = useFormContext();

  return <button disabled={!formState.isValid}>{children}</button>;
}
