import { FetchBoardsQuery } from "@/commons/graphql/graphql";
import { useState } from "react";

interface iCommentItemProps {
  el: FetchBoardsQuery["fetchBoards"][0];
}

export default function CommentItem({ el }: iCommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit ? (
        <div key={el._id}>
          <input type="text" />
          <button>수정하기</button>
        </div>
      ) : (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      )}
    </div>
  );
}
