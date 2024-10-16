"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoardsPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickAlert = (event) => {
    // event.target : 내가 클릭한 태그
    // event.currentTarget : 클릭이 부모로 버블링될 때 onClick이 실행되는 태그
    alert(`${event.currentTarget.id} 님이 작성한 게시글입니다.`);
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number} id={el.writer} onClick={onClickAlert}>
          <input type="checkbox" />
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
