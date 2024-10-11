"use client";

export default function Box({ children }) {
  return (
    <>
      <div>++++++ Box Component ++++++</div>
      <div>{children}</div>
      <div>++++++ Box Component ++++++</div>
    </>
  );
}
