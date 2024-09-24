import { useState } from 'react';

const Board = () => {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value.trim(' ') !== '' && title.trim(' ') !== '' && content.trim(' ') !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer.trim(' ') !== '' && event.target.value.trim(' ') !== '' && content.trim(' ') !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (writer.trim(' ') !== '' && title.trim(' ') !== '' && event.target.value.trim(' ') !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
      console.log(isActive);
    }
  };
  const onClickSubmit = () => {
    alert('게시글 등록에 성공했습니다.');
    setIsActive(true);
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
      <button onClick={onClickSubmit} style={{ backgroundColor: isActive ? 'yellow' : 'unset' }}>
        등록하기
      </button>
    </>
  );
};

export default Board;
