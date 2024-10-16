/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
};

export type BoardReturn = {
  __typename?: "BoardReturn";
  contents?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  like?: Maybe<Scalars["Int"]["output"]>;
  number?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  writer?: Maybe<Scalars["String"]["output"]>;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type CreateProductInput = {
  detail?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createBoard?: Maybe<Return>;
  createProduct?: Maybe<Return>;
  createProfile?: Maybe<Return>;
  deleteBoard?: Maybe<Return>;
  deleteProduct?: Maybe<Return>;
  deleteProfile?: Maybe<Return>;
  updateBoard?: Maybe<Return>;
  updateProduct?: Maybe<Return>;
  updateProfile?: Maybe<Return>;
};

export type MutationCreateBoardArgs = {
  contents?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  writer?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
  seller?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateProfileArgs = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  school?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationDeleteBoardArgs = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationDeleteProductArgs = {
  productId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationDeleteProfileArgs = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateBoardArgs = {
  contents?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  writer?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateProductArgs = {
  productId?: InputMaybe<Scalars["ID"]["input"]>;
  updateProductInput: UpdateProductInput;
};

export type MutationUpdateProfileArgs = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  school?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductReturn = {
  __typename?: "ProductReturn";
  _id?: Maybe<Scalars["ID"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  detail?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  seller?: Maybe<Scalars["String"]["output"]>;
};

export type ProfileReturn = {
  __typename?: "ProfileReturn";
  age?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  number?: Maybe<Scalars["Int"]["output"]>;
  school?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  fetchBoard?: Maybe<BoardReturn>;
  fetchBoards?: Maybe<Array<BoardReturn>>;
  fetchBoardsCount: Scalars["Int"]["output"];
  fetchProduct?: Maybe<ProductReturn>;
  fetchProducts?: Maybe<Array<ProductReturn>>;
  fetchProductsCount: Scalars["Int"]["output"];
  fetchProfile?: Maybe<ProfileReturn>;
  fetchProfiles?: Maybe<Array<ProfileReturn>>;
  fetchProfilesCount: Scalars["Int"]["output"];
};

export type QueryFetchBoardArgs = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFetchBoardsArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFetchProductArgs = {
  productId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryFetchProductsArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFetchProfileArgs = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryFetchProfilesArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Return = {
  __typename?: "Return";
  _id?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type UpdateProductInput = {
  detail?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CreateBoardMutationVariables = Exact<{
  writerState?: InputMaybe<Scalars["String"]["input"]>;
  titleState?: InputMaybe<Scalars["String"]["input"]>;
  contentsState?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CreateBoardMutation = {
  __typename?: "Mutation";
  createBoard?: {
    __typename?: "Return";
    message?: string | null;
    number?: number | null;
    _id?: string | null;
  } | null;
};

export type CreateProductMutationVariables = Exact<{
  seller?: InputMaybe<Scalars["String"]["input"]>;
  createProductInput: CreateProductInput;
}>;

export type CreateProductMutation = {
  __typename?: "Mutation";
  createProduct?: {
    __typename?: "Return";
    _id?: string | null;
    number?: number | null;
    message?: string | null;
  } | null;
};

export type FetchBoard1QueryVariables = Exact<{ [key: string]: never }>;

export type FetchBoard1Query = {
  __typename?: "Query";
  fetchBoard?: {
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  } | null;
};

export type FetchBoard2QueryVariables = Exact<{ [key: string]: never }>;

export type FetchBoard2Query = {
  __typename?: "Query";
  fetchBoard?: {
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  } | null;
};

export type FetchBoard3QueryVariables = Exact<{ [key: string]: never }>;

export type FetchBoard3Query = {
  __typename?: "Query";
  fetchBoard?: {
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  } | null;
};

export type FetchBoardQueryVariables = Exact<{
  myNumber?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type FetchBoardQuery = {
  __typename?: "Query";
  fetchBoard?: {
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  } | null;
};

export type FetchBoardsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchBoardsQuery = {
  __typename?: "Query";
  fetchBoards?: Array<{
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  }> | null;
};

export type DeleteBoardMutationVariables = Exact<{
  myNumber?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type DeleteBoardMutation = {
  __typename?: "Mutation";
  deleteBoard?: { __typename?: "Return"; message?: string | null } | null;
};

export type UpdateBoardMutationVariables = Exact<{
  mynumber?: InputMaybe<Scalars["Int"]["input"]>;
  writerState?: InputMaybe<Scalars["String"]["input"]>;
  titleState?: InputMaybe<Scalars["String"]["input"]>;
  contentsState?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateBoardMutation = {
  __typename?: "Mutation";
  updateBoard?: {
    __typename?: "Return";
    _id?: string | null;
    number?: number | null;
    message?: string | null;
  } | null;
};

export const CreateBoardDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createBoard" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "writerState" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "titleState" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "contentsState" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "writer" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "writerState" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "title" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "titleState" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "contents" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "contentsState" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "_id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateBoardMutation, CreateBoardMutationVariables>;
export const CreateProductDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createProduct" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "seller" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "createProductInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateProductInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createProduct" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "seller" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "seller" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "createProductInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "createProductInput" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const FetchBoard1Document = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "fetchBoard1" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fetchBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "number" },
                value: { kind: "IntValue", value: "1" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "writer" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "contents" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchBoard1Query, FetchBoard1QueryVariables>;
export const FetchBoard2Document = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "fetchBoard2" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fetchBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "number" },
                value: { kind: "IntValue", value: "2" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "writer" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "contents" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchBoard2Query, FetchBoard2QueryVariables>;
export const FetchBoard3Document = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "fetchBoard3" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fetchBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "number" },
                value: { kind: "IntValue", value: "3" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "writer" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "contents" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchBoard3Query, FetchBoard3QueryVariables>;
export const FetchBoardDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "fetchBoard" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "myNumber" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fetchBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "number" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "myNumber" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "writer" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "contents" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchBoardQuery, FetchBoardQueryVariables>;
export const FetchBoardsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "fetchBoards" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fetchBoards" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "writer" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "contents" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchBoardsQuery, FetchBoardsQueryVariables>;
export const DeleteBoardDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteBoard" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "myNumber" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "number" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "myNumber" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteBoardMutation, DeleteBoardMutationVariables>;
export const UpdateBoardDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateBoard" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "mynumber" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "writerState" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "titleState" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "contentsState" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "number" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "mynumber" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "writer" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "writerState" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "title" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "titleState" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "contents" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "contentsState" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateBoardMutation, UpdateBoardMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
};

export type BoardReturn = {
  __typename?: "BoardReturn";
  contents?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  like?: Maybe<Scalars["Int"]["output"]>;
  number?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  writer?: Maybe<Scalars["String"]["output"]>;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type CreateProductInput = {
  detail?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createBoard?: Maybe<Return>;
  createProduct?: Maybe<Return>;
  createProfile?: Maybe<Return>;
  deleteBoard?: Maybe<Return>;
  deleteProduct?: Maybe<Return>;
  deleteProfile?: Maybe<Return>;
  updateBoard?: Maybe<Return>;
  updateProduct?: Maybe<Return>;
  updateProfile?: Maybe<Return>;
};

export type MutationCreateBoardArgs = {
  contents?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  writer?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
  seller?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateProfileArgs = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  school?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationDeleteBoardArgs = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationDeleteProductArgs = {
  productId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationDeleteProfileArgs = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateBoardArgs = {
  contents?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  writer?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateProductArgs = {
  productId?: InputMaybe<Scalars["ID"]["input"]>;
  updateProductInput: UpdateProductInput;
};

export type MutationUpdateProfileArgs = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  school?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductReturn = {
  __typename?: "ProductReturn";
  _id?: Maybe<Scalars["ID"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  detail?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  seller?: Maybe<Scalars["String"]["output"]>;
};

export type ProfileReturn = {
  __typename?: "ProfileReturn";
  age?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  number?: Maybe<Scalars["Int"]["output"]>;
  school?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  fetchBoard?: Maybe<BoardReturn>;
  fetchBoards?: Maybe<Array<BoardReturn>>;
  fetchBoardsCount: Scalars["Int"]["output"];
  fetchProduct?: Maybe<ProductReturn>;
  fetchProducts?: Maybe<Array<ProductReturn>>;
  fetchProductsCount: Scalars["Int"]["output"];
  fetchProfile?: Maybe<ProfileReturn>;
  fetchProfiles?: Maybe<Array<ProfileReturn>>;
  fetchProfilesCount: Scalars["Int"]["output"];
};

export type QueryFetchBoardArgs = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFetchBoardsArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFetchProductArgs = {
  productId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryFetchProductsArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFetchProfileArgs = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryFetchProfilesArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Return = {
  __typename?: "Return";
  _id?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type UpdateProductInput = {
  detail?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CreateBoardMutationVariables = Exact<{
  writerState?: InputMaybe<Scalars["String"]["input"]>;
  titleState?: InputMaybe<Scalars["String"]["input"]>;
  contentsState?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CreateBoardMutation = {
  __typename?: "Mutation";
  createBoard?: {
    __typename?: "Return";
    message?: string | null;
    number?: number | null;
    _id?: string | null;
  } | null;
};

export type CreateProductMutationVariables = Exact<{
  seller?: InputMaybe<Scalars["String"]["input"]>;
  createProductInput: CreateProductInput;
}>;

export type CreateProductMutation = {
  __typename?: "Mutation";
  createProduct?: {
    __typename?: "Return";
    _id?: string | null;
    number?: number | null;
    message?: string | null;
  } | null;
};

export type FetchBoard1QueryVariables = Exact<{ [key: string]: never }>;

export type FetchBoard1Query = {
  __typename?: "Query";
  fetchBoard?: {
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  } | null;
};

export type FetchBoard2QueryVariables = Exact<{ [key: string]: never }>;

export type FetchBoard2Query = {
  __typename?: "Query";
  fetchBoard?: {
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  } | null;
};

export type FetchBoard3QueryVariables = Exact<{ [key: string]: never }>;

export type FetchBoard3Query = {
  __typename?: "Query";
  fetchBoard?: {
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  } | null;
};

export type FetchBoardQueryVariables = Exact<{
  myNumber?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type FetchBoardQuery = {
  __typename?: "Query";
  fetchBoard?: {
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  } | null;
};

export type FetchBoardsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchBoardsQuery = {
  __typename?: "Query";
  fetchBoards?: Array<{
    __typename?: "BoardReturn";
    number?: number | null;
    writer?: string | null;
    title?: string | null;
    contents?: string | null;
  }> | null;
};

export type DeleteBoardMutationVariables = Exact<{
  myNumber?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type DeleteBoardMutation = {
  __typename?: "Mutation";
  deleteBoard?: { __typename?: "Return"; message?: string | null } | null;
};

export type UpdateBoardMutationVariables = Exact<{
  mynumber?: InputMaybe<Scalars["Int"]["input"]>;
  writerState?: InputMaybe<Scalars["String"]["input"]>;
  titleState?: InputMaybe<Scalars["String"]["input"]>;
  contentsState?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateBoardMutation = {
  __typename?: "Mutation";
  updateBoard?: {
    __typename?: "Return";
    _id?: string | null;
    number?: number | null;
    message?: string | null;
  } | null;
};

// export const CreateBoardDocument = gql`
//   mutation createBoard(
//     $writerState: String
//     $titleState: String
//     $contentsState: String
//   ) {
//     createBoard(
//       writer: $writerState
//       title: $titleState
//       contents: $contentsState
//     ) {
//       message
//       number
//       _id
//     }
//   }
// `;
export type CreateBoardMutationFn = Apollo.MutationFunction<
  CreateBoardMutation,
  CreateBoardMutationVariables
>;

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      writerState: // value for 'writerState'
 *      titleState: // value for 'titleState'
 *      contentsState: // value for 'contentsState'
 *   },
 * });
 */
export function useCreateBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBoardMutation,
    CreateBoardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(
    CreateBoardDocument,
    options
  );
}
export type CreateBoardMutationHookResult = ReturnType<
  typeof useCreateBoardMutation
>;
export type CreateBoardMutationResult =
  Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<
  CreateBoardMutation,
  CreateBoardMutationVariables
>;
// export const CreateProductDocument = gql`
//   mutation createProduct(
//     $seller: String
//     $createProductInput: CreateProductInput!
//   ) {
//     createProduct(seller: $seller, createProductInput: $createProductInput) {
//       _id
//       number
//       message
//     }
//   }
// `;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      seller: // value for 'seller'
 *      createProductInput: // value for 'createProductInput'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>;
export type CreateProductMutationResult =
  Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
// export const FetchBoard1Document = gql`
//   query fetchBoard1 {
//     fetchBoard(number: 1) {
//       number
//       writer
//       title
//       contents
//     }
//   }
// `;

/**
 * __useFetchBoard1Query__
 *
 * To run a query within a React component, call `useFetchBoard1Query` and pass it any options that fit your needs.
 * When your component renders, `useFetchBoard1Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBoard1Query({
 *   variables: {
 *   },
 * });
 */
export function useFetchBoard1Query(
  baseOptions?: Apollo.QueryHookOptions<
    FetchBoard1Query,
    FetchBoard1QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchBoard1Query, FetchBoard1QueryVariables>(
    FetchBoard1Document,
    options
  );
}
export function useFetchBoard1LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchBoard1Query,
    FetchBoard1QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchBoard1Query, FetchBoard1QueryVariables>(
    FetchBoard1Document,
    options
  );
}
export function useFetchBoard1SuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        FetchBoard1Query,
        FetchBoard1QueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FetchBoard1Query, FetchBoard1QueryVariables>(
    FetchBoard1Document,
    options
  );
}
export type FetchBoard1QueryHookResult = ReturnType<typeof useFetchBoard1Query>;
export type FetchBoard1LazyQueryHookResult = ReturnType<
  typeof useFetchBoard1LazyQuery
>;
export type FetchBoard1SuspenseQueryHookResult = ReturnType<
  typeof useFetchBoard1SuspenseQuery
>;
export type FetchBoard1QueryResult = Apollo.QueryResult<
  FetchBoard1Query,
  FetchBoard1QueryVariables
>;
// export const FetchBoard2Document = gql`
//   query fetchBoard2 {
//     fetchBoard(number: 2) {
//       number
//       writer
//       title
//       contents
//     }
//   }
// `;

/**
 * __useFetchBoard2Query__
 *
 * To run a query within a React component, call `useFetchBoard2Query` and pass it any options that fit your needs.
 * When your component renders, `useFetchBoard2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBoard2Query({
 *   variables: {
 *   },
 * });
 */
export function useFetchBoard2Query(
  baseOptions?: Apollo.QueryHookOptions<
    FetchBoard2Query,
    FetchBoard2QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchBoard2Query, FetchBoard2QueryVariables>(
    FetchBoard2Document,
    options
  );
}
export function useFetchBoard2LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchBoard2Query,
    FetchBoard2QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchBoard2Query, FetchBoard2QueryVariables>(
    FetchBoard2Document,
    options
  );
}
export function useFetchBoard2SuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        FetchBoard2Query,
        FetchBoard2QueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FetchBoard2Query, FetchBoard2QueryVariables>(
    FetchBoard2Document,
    options
  );
}
export type FetchBoard2QueryHookResult = ReturnType<typeof useFetchBoard2Query>;
export type FetchBoard2LazyQueryHookResult = ReturnType<
  typeof useFetchBoard2LazyQuery
>;
export type FetchBoard2SuspenseQueryHookResult = ReturnType<
  typeof useFetchBoard2SuspenseQuery
>;
export type FetchBoard2QueryResult = Apollo.QueryResult<
  FetchBoard2Query,
  FetchBoard2QueryVariables
>;
// export const FetchBoard3Document = gql`
//   query fetchBoard3 {
//     fetchBoard(number: 3) {
//       number
//       writer
//       title
//       contents
//     }
//   }
// `;

/**
 * __useFetchBoard3Query__
 *
 * To run a query within a React component, call `useFetchBoard3Query` and pass it any options that fit your needs.
 * When your component renders, `useFetchBoard3Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBoard3Query({
 *   variables: {
 *   },
 * });
 */
export function useFetchBoard3Query(
  baseOptions?: Apollo.QueryHookOptions<
    FetchBoard3Query,
    FetchBoard3QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchBoard3Query, FetchBoard3QueryVariables>(
    FetchBoard3Document,
    options
  );
}
export function useFetchBoard3LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchBoard3Query,
    FetchBoard3QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchBoard3Query, FetchBoard3QueryVariables>(
    FetchBoard3Document,
    options
  );
}
export function useFetchBoard3SuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        FetchBoard3Query,
        FetchBoard3QueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FetchBoard3Query, FetchBoard3QueryVariables>(
    FetchBoard3Document,
    options
  );
}
export type FetchBoard3QueryHookResult = ReturnType<typeof useFetchBoard3Query>;
export type FetchBoard3LazyQueryHookResult = ReturnType<
  typeof useFetchBoard3LazyQuery
>;
export type FetchBoard3SuspenseQueryHookResult = ReturnType<
  typeof useFetchBoard3SuspenseQuery
>;
export type FetchBoard3QueryResult = Apollo.QueryResult<
  FetchBoard3Query,
  FetchBoard3QueryVariables
>;
// export const FetchBoardDocument = gql`
//   query fetchBoard($myNumber: Int) {
//     fetchBoard(number: $myNumber) {
//       number
//       writer
//       title
//       contents
//     }
//   }
// `;

/**
 * __useFetchBoardQuery__
 *
 * To run a query within a React component, call `useFetchBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBoardQuery({
 *   variables: {
 *      myNumber: // value for 'myNumber'
 *   },
 * });
 */
export function useFetchBoardQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchBoardQuery,
    FetchBoardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchBoardQuery, FetchBoardQueryVariables>(
    FetchBoardDocument,
    options
  );
}
export function useFetchBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchBoardQuery,
    FetchBoardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchBoardQuery, FetchBoardQueryVariables>(
    FetchBoardDocument,
    options
  );
}
export function useFetchBoardSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<FetchBoardQuery, FetchBoardQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FetchBoardQuery, FetchBoardQueryVariables>(
    FetchBoardDocument,
    options
  );
}
export type FetchBoardQueryHookResult = ReturnType<typeof useFetchBoardQuery>;
export type FetchBoardLazyQueryHookResult = ReturnType<
  typeof useFetchBoardLazyQuery
>;
export type FetchBoardSuspenseQueryHookResult = ReturnType<
  typeof useFetchBoardSuspenseQuery
>;
export type FetchBoardQueryResult = Apollo.QueryResult<
  FetchBoardQuery,
  FetchBoardQueryVariables
>;
// export const FetchBoardsDocument = gql`
//     query fetchBoards {
//   fetchBoards {
//     number
//     writer
//     title
//     contents
//   }
// }
//     `;

/**
 * __useFetchBoardsQuery__
 *
 * To run a query within a React component, call `useFetchBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBoardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchBoardsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FetchBoardsQuery,
    FetchBoardsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchBoardsQuery, FetchBoardsQueryVariables>(
    FetchBoardsDocument,
    options
  );
}
export function useFetchBoardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchBoardsQuery,
    FetchBoardsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchBoardsQuery, FetchBoardsQueryVariables>(
    FetchBoardsDocument,
    options
  );
}
export function useFetchBoardsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        FetchBoardsQuery,
        FetchBoardsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FetchBoardsQuery, FetchBoardsQueryVariables>(
    FetchBoardsDocument,
    options
  );
}
export type FetchBoardsQueryHookResult = ReturnType<typeof useFetchBoardsQuery>;
export type FetchBoardsLazyQueryHookResult = ReturnType<
  typeof useFetchBoardsLazyQuery
>;
export type FetchBoardsSuspenseQueryHookResult = ReturnType<
  typeof useFetchBoardsSuspenseQuery
>;
export type FetchBoardsQueryResult = Apollo.QueryResult<
  FetchBoardsQuery,
  FetchBoardsQueryVariables
>;
// export const DeleteBoardDocument = gql`
//   mutation deleteBoard($myNumber: Int) {
//     deleteBoard(number: $myNumber) {
//       message
//     }
//   }
// `;
export type DeleteBoardMutationFn = Apollo.MutationFunction<
  DeleteBoardMutation,
  DeleteBoardMutationVariables
>;

/**
 * __useDeleteBoardMutation__
 *
 * To run a mutation, you first call `useDeleteBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardMutation, { data, loading, error }] = useDeleteBoardMutation({
 *   variables: {
 *      myNumber: // value for 'myNumber'
 *   },
 * });
 */
export function useDeleteBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBoardMutation,
    DeleteBoardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteBoardMutation, DeleteBoardMutationVariables>(
    DeleteBoardDocument,
    options
  );
}
export type DeleteBoardMutationHookResult = ReturnType<
  typeof useDeleteBoardMutation
>;
export type DeleteBoardMutationResult =
  Apollo.MutationResult<DeleteBoardMutation>;
export type DeleteBoardMutationOptions = Apollo.BaseMutationOptions<
  DeleteBoardMutation,
  DeleteBoardMutationVariables
>;
// export const UpdateBoardDocument = gql`
//   mutation updateBoard(
//     $mynumber: Int
//     $writerState: String
//     $titleState: String
//     $contentsState: String
//   ) {
//     updateBoard(
//       number: $mynumber
//       writer: $writerState
//       title: $titleState
//       contents: $contentsState
//     ) {
//       _id
//       number
//       message
//     }
//   }
// `;
export type UpdateBoardMutationFn = Apollo.MutationFunction<
  UpdateBoardMutation,
  UpdateBoardMutationVariables
>;

/**
 * __useUpdateBoardMutation__
 *
 * To run a mutation, you first call `useUpdateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardMutation, { data, loading, error }] = useUpdateBoardMutation({
 *   variables: {
 *      mynumber: // value for 'mynumber'
 *      writerState: // value for 'writerState'
 *      titleState: // value for 'titleState'
 *      contentsState: // value for 'contentsState'
 *   },
 * });
 */
export function useUpdateBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBoardMutation,
    UpdateBoardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBoardMutation, UpdateBoardMutationVariables>(
    UpdateBoardDocument,
    options
  );
}
export type UpdateBoardMutationHookResult = ReturnType<
  typeof useUpdateBoardMutation
>;
export type UpdateBoardMutationResult =
  Apollo.MutationResult<UpdateBoardMutation>;
export type UpdateBoardMutationOptions = Apollo.BaseMutationOptions<
  UpdateBoardMutation,
  UpdateBoardMutationVariables
>;
