"use client";

import { gql, useQuery } from "@apollo/client";
import { IUpdateType } from "./form.schema";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
    }
  }
`;

export const useInitialize = ({ setValue, trigger }) => {
  const { boardId } = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId },
  });

  // 수정하기 초기값 설정
  useEffect(() => {
    if (!data) return;

    const { title, contents } = data.fetchBoard;

    setValue("title", title);
    setValue("contents", contents);
    // trigger(); // 변경 사항 없을 때에도 요청 버튼 활성화
  }, [data]);

  // 수정완료 기능
  const onSubmit = async (data: IUpdateType) => {
    console.log(data);
  };

  return {
    onSubmit,
  };
};
