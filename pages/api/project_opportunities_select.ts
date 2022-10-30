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
                type: opportunityType {
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
                  progressPercentage
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
