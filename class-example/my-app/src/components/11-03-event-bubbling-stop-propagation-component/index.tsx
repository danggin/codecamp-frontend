"use client";

export default function Checkbox() {
  const b1 = (event) => {
    event.stopPropagation();
    alert("b1 클릭");
  };

  const b2 = (event) => {
    event.stopPropagation();
    alert("b2 클릭");
  };

  return (
    <>
      <span onClick={b2}>
        <input type="checkbox" onClick={b1} />
      </span>
    </>
  );
}
