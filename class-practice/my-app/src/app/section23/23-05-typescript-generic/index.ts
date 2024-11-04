// 1. 문자/숫자/불린 타입(primitive type)

import { useState } from "react";

const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result1 = getPrimitive("Hi", 23, true);

// 2. any type => 그냥 자바스크립트를 쓰는 것과 같음

const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000); // 불가능한 연산이지만 any 타입이라 에러가 발생하지 않음
  return [arg3, arg2, arg1];
};

const result2 = getAny("Hi", 23, [1, 2, 3]);

// 3. unknown type => any보다 조금 안정성이 있는 타입
// 해당 타입을 사용할 때 필터링을 해줘서 에러를 만들어줌

const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result3 = getUnknown("Hi", 23, [1, 2, 3]);

// 4. generic type

const getGeneric = <mytype1, mytype2, mytype3>(arg1: mytype1, arg2: mytype2, arg3: mytype3): [mytype3, mytype2, mytype1] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result4 = getGeneric("Hi", 23, [1, 2, 3]);

// 5. generic type => 짧게

const getGenericShort = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result5 = getGenericShort("Hi", 23, true);

// 6. generic type => 더 짧게

const getGenericShorter = <T, S, Q>(arg1: T, arg2: S, arg3: Q): [Q, S, T] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result6 = getGenericShorter("Hi", 23, true);

// 7. generic type => 함수선언식

function getGenericFunction<T, S, Q>(arg1: T, arg2: S, arg3: Q): [Q, S, T] {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
}

const result7 = getGenericFunction<string, number, boolean>("Hi", 23, true);
