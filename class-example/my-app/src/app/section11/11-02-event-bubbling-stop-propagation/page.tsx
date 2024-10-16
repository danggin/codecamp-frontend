"use client";

import Checkbox from "@/components/11-03-event-bubbling-stop-propagation-component";
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

  const onClickAlert = (event) => {};

  const a = () => {
    alert("a 클릭");
  };

  const c = (event) => {
    event.stopPropagation();
    alert("c 클릭");
  };

  const d = (event) => {
    event.stopPropagation();
    alert("d 클릭");
  };

  const e = (event) => {
    event.stopPropagation();
    alert("e 클릭");
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number} id={el.writer} onClick={a}>
          <Checkbox />
          <span style={{ margin: "10px" }} onClick={c}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }} onClick={d}>
            {el.writer}
          </span>
          <span onClick={e}>{el.title}</span>
        </div>
      ))}
    </>
  );
}
