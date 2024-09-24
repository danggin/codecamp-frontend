const TypescriptExample = () => {
  // 타입 추론
  let a = '안녕하세요';
  a = 3;

  // 타입 명시
  let b: string = '안녕하세요';
  b = 3;

  // 타입 명시가 필요한 상황
  // 의도적으로 한가지 이상의 타입이 가능할 때
  let c: number | string = 1000;
  c = '1000원';

  // 숫자 타입
  let d: number = 10;
  d = 'ten';

  // 불린 타입
  let e: boolean = true;
  e = 'false';

  // 배열 타입
  let f: number[] = [1, 2, 3, 4, 5];
  let g: string[] = ['hi', 'hey'];
  let h = [1, 2, 3, 'hi']; // 타입을 추론해서 어떤 타입인지 역으로 알아낼 수 있다

  // 객체 타입

  interface iProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }

  let profile: iProfile = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
  };

  profile.name = '훈이';
  profile.age = '8살';
  profile.hobby = '수영';

  // 함수 타입 => 함수는 계속 재사용이 가능하기 때문에 타입 추론이 안됨, 꼭 타입 명시하기

  function add(a: number, b: number, unit: string): string {
    return a + b + unit;
  }

  add(1000, 2000, '원');

  const add2 = (a: number, b: number, unit: string): string => {
    return a + b + unit;
  };

  add2(1000, 2000, '원');

  return <></>;
};
