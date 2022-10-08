import { useQuery, gql } from "@apollo/client";

import { projectOpportunitiesSelect } from "./__generated__/projectOpportunitiesSelect";

export const useProjectOpportunitiesSelect = () => {
  const { data, loading, error } = useQuery<projectOpportunitiesSelect>(
    gql`
      query projectOpportunitiesSelect {
        projectBasedOpportunities {
          edges {
            node {
              databaseId
              slug
              title
              communityAndOpportunityPopUps {
                alphanumericLabel
                opportunityType {
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
