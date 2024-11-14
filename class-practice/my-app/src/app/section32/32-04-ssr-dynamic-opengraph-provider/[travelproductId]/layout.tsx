import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const FETCH_TRAVELPRODUCT = gql`
  query fetchTravelproduct($travelproductId: ID!) {
    fetchTravelproduct(travelproductId: $travelproductId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default async function OpengraphProviderHead({ children, params }) {
  const graphQlClient = new GraphQLClient(
    "https://main-practice.codebootcamp.co.kr/graphql"
  );

  const data = await graphQlClient.request(FETCH_TRAVELPRODUCT, {
    travelproductId: params.travelproductId,
  });

  return (
    <>
      <meta property="og:title" content={data?.fetchTravelproduct?.name} />
      <meta
        property="og:description"
        content={data?.fetchTravelproduct?.remarks}
      />
      <meta
        property="og:image"
        content={data?.fetchTravelproduct?.images?.[0]}
      />
      <>{children}</>
    </>
  );
}
