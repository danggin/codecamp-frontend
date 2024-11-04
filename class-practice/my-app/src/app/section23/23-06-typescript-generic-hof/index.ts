// 1. HOF - 함수선언식

function first<F>(arg1: F) {
  return function second<S>(arg2: S): [F, S] {
    return [arg1, arg2];
  };
}

const result1 = first("영희")(8);

// 1. HOF - 화살표함수
// prettier-ignore
const firstArrow = <F>(arg1: F) => <S>(arg2: S): [F, S] => [arg1, arg2];

const result2 = firstArrow("영희")(8);

// 2. HOC
// prettier-ignore
const withLoginCheck = <C>(component: C) => <P>(props: P): [C, P] => [component, props];

const result3 = withLoginCheck("")({});
