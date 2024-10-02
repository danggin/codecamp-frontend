"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
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
  console.log(data);

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number}>
          <input type="checkbox" />
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
