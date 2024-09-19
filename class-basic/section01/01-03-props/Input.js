const Input = (props) => {
  const message = '비밀번호를 입력해 주세요.';
  const numberOfApple = props.bag;

  return <input type='password' placeholder={numberOfApple} />;
};
