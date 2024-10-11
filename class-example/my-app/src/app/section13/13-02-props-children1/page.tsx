import Box from "@/components/13-02-props-children1";

export default function PropsChildrenPage() {
  // 1. children 넘기는 첫번째 방식
  //   return (
  //     <>
  //       <div>++++++ Props Children Page ++++++</div>
  //       <Box children={<button>버튼1</button>} />
  //       <div>++++++ Props Children Page ++++++</div>
  //     </>
  //   );

  //   2. children 넘기는 두번째 방식
  return (
    <>
      <div>++++++ Props Children Page ++++++</div>
      <Box>
        <button>버튼2</button>
      </Box>
      <div>++++++ Props Children Page ++++++</div>
    </>
  );

  // 3. 만약에 둘 다 있으면?
  //   return (
  //     <>
  //       <div>++++++ Props Children Page ++++++</div>
  //       <Box children={<button>버튼1</button>}>
  //         <button>버튼2</button>
  //       </Box>
  //       <div>++++++ Props Children Page ++++++</div>
  //     </>
  //   );
}
