"use client";

import { Component, ReactNode } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 1,
  };

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
        {/* 해결방법 2) 로직 상의 this를 연결(.bind) */}
      </>
    );
  }
}
