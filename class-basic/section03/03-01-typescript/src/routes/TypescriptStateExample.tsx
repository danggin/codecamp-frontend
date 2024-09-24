import { useState } from 'react';

interface iProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string;
}

const TypescriptStateExample = () => {
  // 타입 추론
  const [age, setAge] = useState(12);
  setAge('13살');

  // 타입 명시
  const [school, setSchool] = useState<string>('');

  // 타입 명시를 해야하는 상황
  const [profile, setProfile] = useState<iProfile>({
    name: '철수',
    age: 9,
    school: '다람쥐초등학교',
  });

  setProfile({
    name: '훈이',
    age: '9살',
    school: '공룡초등학교',
  });
};
