"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

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

export default function OpengraphProviderHead({ children }) {
  const params = useParams();
  const travelproductId = params.travelproductId;

  const { data } = useQuery(FETCH_TRAVELPRODUCT, {
    variables: { travelproductId },
  });

  return (
    <>
      <meta property="og:title" content={`${data?.fetchTravelproduct?.name}`} />
      <meta
        property="og:description"
        content={`${data?.fetchTravelproduct?.remarks}`}
      />
      <meta
        property="og:image"
        content={`${data?.fetchTravelproduct?.images?.[0]}`}
      />
      <>{children}</>
    </>
  );
}
