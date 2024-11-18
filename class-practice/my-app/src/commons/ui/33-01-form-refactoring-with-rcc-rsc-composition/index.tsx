"use client";

import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Form<FormSchema extends FieldValues>({
  schema,
  children,
  useInitialize,
}) {
  const methods = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { onSubmit } = useInitialize(methods);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
