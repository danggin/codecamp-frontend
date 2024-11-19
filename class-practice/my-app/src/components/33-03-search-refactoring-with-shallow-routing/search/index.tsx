"use client";

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = () => {
    // refetch({ search, page: 1 });

    // 1. shallow routing => 페이지는 변하지 않고 url만 변경
    // => url 관련 컴포넌트(usePathname, useSearchParams)만 리렌더링
    // => 구버전 : router.push(url, option, {shallow: true})

    window.history.pushState(null, "", `?search=${search}`);
  };

  console.log("검색이 리렌더되었습니다.");

  return (
    <>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
    </>
  );
}
