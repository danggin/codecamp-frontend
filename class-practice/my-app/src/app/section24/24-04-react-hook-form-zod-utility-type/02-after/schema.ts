import { UpdateBoardInput } from "@/commons/graphql/graphql";
import { z } from "zod";

// 1. 내가 만든 z.object로 타입 뽑아내기
type TSchema = z.infer<typeof schema>;

// 2-1. 이미 타입이 있는 경우, 이 타입 적용해서 schema 만들기
interface ISchema {
  writer: string;
  title: string;
  contents: string;
}

// 2-2. 이미 있는 타입을 다운로드 받은 경우 => Omit으로도 사용 가능 (안정성이 낮으니 주의)
export interface IUpdateType
  extends Pick<UpdateBoardInput, "title" | "contents"> {
  // hobby: string => 추가도 가능
}

export const schema: z.ZodType<IUpdateType> = z.object({
  // writer: z.string().min(1, { message: "작성자를 입력해 주세요." }),
  title: z.string().min(1, { message: "제목을 입력해 주세요" }),
  contents: z.string().min(1, { message: "내용을 입력해 주세요" }),

  // hobby: z.string().optional(),
  // email: z.string().email("이메일 형식에 적합하지 않습니다."),
  // password: z
  //   .string()
  //   .min(4, { message: "비밀번호는 최소 4자리 이상 입력해 주세요." })
  //   .max(15, { message: "비밀번호는 최대 15자리로 입력해 주세요." }),
  // phone: z
  //   .string()
  //   .regex(/^\d{3}-\d{3,4}-\d{4}$/, {
  //     message: "휴대폰번호 형식에 알맞게 입력해 주세요.",
  //   }),
});
