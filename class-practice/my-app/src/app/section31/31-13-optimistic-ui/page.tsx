"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoardLike($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
      title
      writer
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "672773bd2093f700292fa91c" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "672773bd2093f700292fa91c" },
      //   refetchQueries: [{ ... }]
      optimisticResponse: {
        likeBoard: (data?.fetchBoard?.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "672773bd2093f700292fa91c" },
          data: {
            fetchBoard: {
              _id: "672773bd2093f700292fa91c",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>{data?.fetchBoard?.title}</div>
      <div>{data?.fetchBoard?.writer}</div>
      <div>♡ {data?.fetchBoard?.likeCount ?? 0}</div>
      <button onClick={onClickLike}>좋아요</button>
    </>
  );
}
