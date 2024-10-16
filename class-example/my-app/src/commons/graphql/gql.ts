/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createBoard(\n    $writerState: String\n    $titleState: String\n    $contentsState: String\n  ) {\n    # 타입 적는 곳\n    createBoard(\n      writer: $writerState\n      title: $titleState\n      contents: $contentsState\n    ) {\n      # 실제 전달할 변수 적는 곳\n      message\n      number\n      _id\n    }\n  }\n": types.CreateBoardDocument,
    "\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n": types.CreateProductDocument,
    "\n  query fetchBoard1 {\n    fetchBoard(number: 1) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoard1Document,
    "\n  query fetchBoard2 {\n    fetchBoard(number: 2) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoard2Document,
    "\n  query fetchBoard3 {\n    fetchBoard(number: 3) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoard3Document,
    "\n  query fetchBoard($myNumber: Int) {\n    fetchBoard(number: $myNumber) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoardDocument,
    "\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoardsDocument,
    "\n  mutation deleteBoard($myNumber: Int) {\n    deleteBoard(number: $myNumber) {\n      message\n    }\n  }\n": types.DeleteBoardDocument,
    "\n  mutation updateBoard(\n    $mynumber: Int\n    $writerState: String\n    $titleState: String\n    $contentsState: String\n  ) {\n    updateBoard(\n      number: $mynumber\n      writer: $writerState\n      title: $titleState\n      contents: $contentsState\n    ) {\n      _id\n      number\n      message\n    }\n  }\n": types.UpdateBoardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createBoard(\n    $writerState: String\n    $titleState: String\n    $contentsState: String\n  ) {\n    # 타입 적는 곳\n    createBoard(\n      writer: $writerState\n      title: $titleState\n      contents: $contentsState\n    ) {\n      # 실제 전달할 변수 적는 곳\n      message\n      number\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation createBoard(\n    $writerState: String\n    $titleState: String\n    $contentsState: String\n  ) {\n    # 타입 적는 곳\n    createBoard(\n      writer: $writerState\n      title: $titleState\n      contents: $contentsState\n    ) {\n      # 실제 전달할 변수 적는 곳\n      message\n      number\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct(\n    $seller: String\n    $createProductInput: CreateProductInput!\n  ) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n      _id\n      number\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard1 {\n    fetchBoard(number: 1) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard1 {\n    fetchBoard(number: 1) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard2 {\n    fetchBoard(number: 2) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard2 {\n    fetchBoard(number: 2) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard3 {\n    fetchBoard(number: 3) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard3 {\n    fetchBoard(number: 3) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard($myNumber: Int) {\n    fetchBoard(number: $myNumber) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard($myNumber: Int) {\n    fetchBoard(number: $myNumber) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBoard($myNumber: Int) {\n    deleteBoard(number: $myNumber) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation deleteBoard($myNumber: Int) {\n    deleteBoard(number: $myNumber) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBoard(\n    $mynumber: Int\n    $writerState: String\n    $titleState: String\n    $contentsState: String\n  ) {\n    updateBoard(\n      number: $mynumber\n      writer: $writerState\n      title: $titleState\n      contents: $contentsState\n    ) {\n      _id\n      number\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation updateBoard(\n    $mynumber: Int\n    $writerState: String\n    $titleState: String\n    $contentsState: String\n  ) {\n    updateBoard(\n      number: $mynumber\n      writer: $writerState\n      title: $titleState\n      contents: $contentsState\n    ) {\n      _id\n      number\n      message\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;