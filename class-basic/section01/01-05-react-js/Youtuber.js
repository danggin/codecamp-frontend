const ChannelPage = ({ subscribers, increaseSubscriber }) => {
  return (
    <div>
      <div>민지의 채널에 오신 것을 환영합니다.</div>
      <span>구독자 수: </span>
      <span>{subscribers}</span>
      <br />
      <button onClick={increaseSubscriber}>구독하기</button>
    </div>
  );
};
