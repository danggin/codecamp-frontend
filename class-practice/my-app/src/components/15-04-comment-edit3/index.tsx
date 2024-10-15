import { useState } from "react";

export default function CommentItem({ el }) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit ? (
        <div key={props.el._id}>
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
