const ListPage = (props) => {
  return (
    <div>
      <div>유튜브1</div>
      <div>유튜브2</div>
      <div>유튜브3</div>
      <div>유튜브4</div>
      <div>...</div>
      <span>구독자 수: </span>
      <span>{props.subscribers}</span>
    </div>
  );
};
