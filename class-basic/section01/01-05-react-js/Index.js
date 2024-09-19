const MainPage = () => {
  const [subscribers, setSubscribers] = React.useState(0);

  const increaseSubscriber = () => {
    setSubscribers(subscribers + 1);
  };

  const showList = () => {
    document.querySelector('#list').style = 'display: block';
    document.querySelector('#channel').style = 'display: none';
  };

  const showChannel = () => {
    document.querySelector('#list').style = 'display: none';
    document.querySelector('#channel').style = 'display: block';
  };

  return (
    <div>
      <div>배너 화면입니다.</div>
      <div>
        <button onClick={showList}>유튜브 목록</button>
        <button onClick={showChannel}>민지의 유튜브 채널</button>
      </div>
      <div id='list'>
        <ListPage subscribers={subscribers} />
      </div>
      <div id='channel'>
        <ChannelPage subscribers={subscribers} increaseSubscriber={increaseSubscriber} />
      </div>
    </div>
  );
};
