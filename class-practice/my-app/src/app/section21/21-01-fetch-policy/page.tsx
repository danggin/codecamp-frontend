"use client";

import FetchPolicyExample from "@/components/21-01-fetch-policy";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoardsNoContents {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function FetchPolicyPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  const onClickMove = () => {
    router.push("/section21/21-01-fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>
        1. 버튼을 클릭하면 새로운 컴포넌트가 나타납니다.
      </button>
      <br />
      =======================================
      <br />
      {isOpen && <FetchPolicyExample />}
      <button onClick={onClickMove}>
        2. 버튼을 클릭하면 페이지가 이동됩니다.
      </button>
    </div>
  );
}
