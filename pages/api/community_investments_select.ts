import { useQuery, gql } from "@apollo/client";
import { communityInvestmentsSelect } from "./__generated__/communityInvestmentsSelect";

export const useCommunityInvestmentsSelect = () => {
  const { data, loading, error } = useQuery<communityInvestmentsSelect>(
    gql`
      query communityInvestmentsSelect {
        communityInvestmentTypes {
          edges {
            node {
              databaseId
              slug
              name
            }
          }
        }
        communityInvestments {
          edges {
            node {
              databaseId
              slug
              title
              communityAndOpportunityPopUps {
                alphanumericLabel
                progress {
                  progressLabel
                  committed
                  deployed
                  currentPhase
                }
              }
            }
          }
        }
      }
    `
  );

  return {
    data,
    loading,
    error,
  };
};
