"use client";

import { gql, useQuery } from "@apollo/client";
import { ChangeEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function FetchPolicyExample() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
