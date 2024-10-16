"use client";

import Link from "next/link";
import { Component, ReactNode } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 1,
  };

  componentDidMount() {
    console.log("MOUNT: 그려지고 나서 실행!");
    // ex. api 요청, input의 포커스 깜빡깜빡 등등
  }

  componentDidUpdate() {
    console.log("UPDATE: 변경되고 나서 실행!");
  }

  componentWillUnmount() {
    console.log("UNMOUNT: 사라지기 전에 실행!");
    // ex. 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 청소(clean up function)
  }

  // 해결 방법 1) 화살표 함수
  onClickCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render(): ReactNode {
    return (
      <>
        <div>Count: {this.state.count}</div>
        <button onClick={this.onClickCountUp.bind(this)}>더하기</button>
        <br />
        {/* 해결방법 2) 로직 상의 this를 연결(.bind) */}
        <Link href={"/"}>나가기</Link>
      </>
    );
  }
}
