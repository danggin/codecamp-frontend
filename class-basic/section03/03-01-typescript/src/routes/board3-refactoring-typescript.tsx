import React from 'react';
import { ChangeEvent, useState } from 'react';

const BoardRefactoring = () => {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value && title && content) return setIsActive(true);
    setIsActive(false);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (writer && event.target.value && content) return setIsActive(true);
    setIsActive(false);
  };

  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
    if (writer && title && event.target.value) return setIsActive(true);
    setIsActive(false);
  };

  const onClickSubmit = () => {
    alert('게시글 등록에 성공했습니다.');
  };

  return (
    <>
      <span>작성자 </span>
      <input type='text' onChange={onChangeWriter} />
      <br />
      <span>제목 </span>
      <input type='text' onChange={onChangeTitle} />
      <br />
      <span>내용 </span>
      <input type='text' onChange={onChangeContent} />
      <br />
      <button onClick={onClickSubmit} style={{ backgroundColor: isActive ? 'yellow' : 'lightgray' }}>
        등록하기
      </button>
    </>
  );
};

export default BoardRefactoring;
