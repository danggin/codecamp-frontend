import Link from "next/link";

const Aaa = () => {
  return (
    <>
      <div>aaa페이지 입니다.</div>
      <Link href="/section04/04-01-bbb">bbb 페이지로 갈래요</Link>
      <a href="/section04/04-01-bbb">bbb 페이지로 갈래요</a>
    </>
  );
};

export default Aaa;
