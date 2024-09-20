const App = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const onClickSignUp = (event) => {
    if (!email) {
      setEmailError('이메일을 입력해 주세요.');
    } else if (email.includes('@') === false || email.includes('.') === false) {
      setEmailError('이메일이 올바르지 않습니다.');
    } else {
      alert('회원가입을 축하합니다.');
    }
  };

  return (
    <div className='app'>
      <label>이메일 </label>
      <input type='text' onChange={onChangeEmail} />
      <div className='error'>{emailError}</div>
      <label>비밀번호 </label>
      <input type='password' onChange={onChangePassword} />
      <div className='error'>{passwordError}</div>
      <button onClick={onClickSignUp}>회원가입</button>
    </div>
  );
};
