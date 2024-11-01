interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial
type partial = Partial<IProfile>; // 모든 타입을 선택사항으로 가져옴

// 2. Required
type required = Required<IProfile>; // 모든 타입을 필수로

// 3. Pick
type pick = Pick<IProfile, "name" | "age">;

// 4. Omit
type omit = Omit<IProfile, "school">;

// Union Type
type name = "철수" | "영희" | "훈이";

const child1: name = "철수"; // 철수, 영희, 훈이만 가능
const child2: name = "수지";
const child3: string = "짱구";

// 5. Record Type
type record = Record<name, IProfile>;

// 6. 객체의 key로 Union Type 만들기
type keyToUnion = keyof IProfile; // "name" | "age" | "school" | "hobby"
const myProfile: keyToUnion = "candy";

// 7. type vs interface

// 선언 병합 가능 => interface
interface IProfile {
  candy: number;
}

// 8. 응용

const profile: Partial<IProfile> = {
  name: "짱구",
  age: 12,
};
