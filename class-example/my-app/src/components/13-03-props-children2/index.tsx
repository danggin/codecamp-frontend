"use client";

export default function Box({ children, school }) {
  return (
    <>
      <div>++++++ Box Component ++++++</div>
      <div>{children}</div>
      <div>{school}</div>
      <div>++++++ Box Component ++++++</div>
    </>
  );
}
