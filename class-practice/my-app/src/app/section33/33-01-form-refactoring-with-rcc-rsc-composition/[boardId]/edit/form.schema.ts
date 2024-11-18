"use client";

import { UpdateBoardInput } from "@/commons/graphql/graphql";
import { z } from "zod";

export interface IUpdateType
  extends Pick<UpdateBoardInput, "title" | "contents"> {}

export const schema: z.ZodType<IUpdateType> = z.object({
  title: z.string().min(1, { message: "제목을 입력해 주세요" }),
  contents: z.string().min(1, { message: "내용을 입력해 주세요" }),
});
