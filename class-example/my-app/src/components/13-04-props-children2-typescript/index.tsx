"use client";

import { IBoxProps } from "./types";

export default function Box({ children, school }: IBoxProps) {
  return (
    <>
      <div>++++++ Box Component ++++++</div>
      <div>{children}</div>
      <div>{school}</div>
      <div>++++++ Box Component ++++++</div>
    </>
  );
}
