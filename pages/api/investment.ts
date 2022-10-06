import { useQuery, gql } from "@apollo/client";

import {
  communityInvestment,
  communityInvestmentVariables,
} from "./__generated__/communityInvestment";

export const useInvestment = (id: string) => {
  const { data, loading, error } = useQuery<
    communityInvestment,
    communityInvestmentVariables
  >(
    gql`
      query communityInvestment($id: ID!) {
        communityInvestment(id: $id, idType: DATABASE_ID) {
          databaseId
          slug
          title
          investment {
            alphanumericLabel
            header
            dataFields {
              dataField {
                labelField
                contentField
              }
            }
            contentBlocks {
              content
            }
            reportingPhasePercentage
            progress {
              progressLabel
              committed
              deployed
            }
          }
        }
      }
    `,
    {
      variables: { id },
    }
  );

  return { data, loading, error };
};
