import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard(
    $writerState: String
    $titleState: String
    $contentsState: String
  ) {
    # 타입 적는 곳
    createBoard(
      writer: $writerState
      title: $titleState
      contents: $contentsState
    ) {
      # 실제 전달할 변수 적는 곳
      message
      number
      _id
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $mynumber: Int
    $writerState: String
    $titleState: String
    $contentsState: String
  ) {
    updateBoard(
      number: $mynumber
      writer: $writerState
      title: $titleState
      contents: $contentsState
    ) {
      _id
      number
      message
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($myNumber: Int) {
    fetchBoard(number: $myNumber) {
      number
      writer
      title
      contents
    }
  }
`;
