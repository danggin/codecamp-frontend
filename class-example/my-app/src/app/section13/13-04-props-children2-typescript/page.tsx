import Box from "@/components/13-04-props-children2-typescript";

export default function PropsChildrenPage() {
  return (
    <>
      <div>++++++ Props Children Page ++++++</div>
      <Box school="다람쥐초등학교">
        <div>
          <button>버튼2</button>
          <br />
          <input type="text" />
          <br />
          <div>안녕하세요!!!!!!</div>
        </div>
      </Box>
      <div>++++++ Props Children Page ++++++</div>
    </>
  );
}
