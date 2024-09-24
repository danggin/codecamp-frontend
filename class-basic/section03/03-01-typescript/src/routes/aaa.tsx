import React from 'react';
import { Link } from 'react-router-dom';

const Aaa = () => {
  return (
    <>
      <div>aaa페이지 입니다.</div>
      <Link to='/bbb'>bbb 페이지로 갈래요</Link>
      <a href='/bbb'>bbb 페이지로 갈래요</a>
    </>
  );
};

export default Aaa;
