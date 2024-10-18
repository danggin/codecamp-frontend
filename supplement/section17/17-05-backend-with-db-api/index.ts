import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

console.log("여기서 API를 만들거예요!");

// 1. API DOCS 만들기
const typeDefs = `#graphql
  type MyBoard {
    number: Int
    writer: String
    title: String
    content: String
  }

  type Query {
    fetchBoards: [MyBoard]!
  }

  type Mutation {
    createBoard(writer: String, title: String, content: String): String!
  }
`;

// 2. API 만들기

const resolvers = {
  Query: {
    fetchBoards: () => {
      return [
        {
          number: 1,
          writer: "짱구",
          title: "안녕",
          content: "하이",
        },
      ];
    },
  },

  Mutation: {
    createBoard: (parent: any, args: any, context: any, info: any) => {
      console.log(args.writer);
      console.log(args.title);
      console.log(args.content);
      return "게시글 등록에 성공했어요!";
    },
  },
};

// 3. API DOCS와 API를 그룹핑한 아폴로서버 만들기
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

console.log("여기서 DB에 접속하고 테이블을 만들거예요!");
const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.38.113", // DB가 있는 컴퓨터의 IP 주소
  port: 5027, // DB가 있는 컴퓨터의 port
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다. 동기화 할게요!");

    // 4. 최종 완성된아폴로서버 실행시키기 (리스닝하기 => 대기하기)
    startStandaloneServer(server, {
      listen: { port: 4000 },
    }).then(() => {
      console.log("🚀 graphql 서버가 실행되었습니다.");
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다...");
    console.log("원인: ", error);
  });
