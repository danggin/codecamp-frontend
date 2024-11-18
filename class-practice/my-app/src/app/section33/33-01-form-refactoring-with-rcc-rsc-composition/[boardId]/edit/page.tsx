// "use client";

import Form from "@/commons/ui/33-01-form-refactoring-with-rcc-rsc-composition";
import { IUpdateType, schema } from "./form.schema";
import { InputSoftSFull } from "@/commons/ui/25-04-input-base-typescript-generic-2";
import { ButtonSoftMFull } from "@/commons/ui/25-04-button-base-typescript-generic-2";
import { useInitialize } from "./form.initialize";

export default function GraphqlMutationPage() {
  return (
    <Form<IUpdateType> schema={schema} useInitialize={useInitialize}>
      제목: <InputSoftSFull<IUpdateType> type="text" keyname="title" />
      <br />
      내용: <InputSoftSFull type="text" keyname="contents" />
      <br />
      <ButtonSoftMFull<IUpdateType>>요청하기</ButtonSoftMFull>
    </Form>
  );
}
