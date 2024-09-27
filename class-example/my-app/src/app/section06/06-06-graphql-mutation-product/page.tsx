"use client";

import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [addProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await addProduct({
      variables: {
        seller: "Apple",
        createProductInput: {
          name: "매직키보드",
          detail: "매직 키보드입니다.",
          price: 149000,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
