import { useQuery, gql } from "@apollo/client";
import { communityInvestmentsSelect } from "./__generated__/communityInvestmentsSelect";

export const useCommunityInvestmentsSelect = () => {
  const { data, loading, error } = useQuery<communityInvestmentsSelect>(
    gql`
      query communityInvestmentsSelect {
        communityInvestments {
          edges {
            node {
              databaseId
              slug
              title
              communityAndOpportunityPopUps {
                alphanumericLabel
                type: investmentType {
                  id
                  slug
                  name
                }
                progress {
                  progressLabel
                  showProgressLabel
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
