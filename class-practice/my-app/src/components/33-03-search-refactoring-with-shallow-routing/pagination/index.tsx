"use client";

export default function Pagination() {
  // 페이지 번호를 클릭했을 때 해당 페이지를 refetch
  const onClickPage = (event) => {
    // refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <>
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
