import { useQuery, gql } from "@apollo/client";

import { projectOpportunitiesSelect } from "./__generated__/projectOpportunitiesSelect";

export const useProjectOpportunitiesSelect = () => {
  const { data, loading, error } = useQuery<projectOpportunitiesSelect>(
    gql`
      query projectOpportunitiesSelect {
        opportunityTypes {
          edges {
            node {
              databaseId
              slug
              name
            }
          }
        }
        projectBasedOpportunities {
          nodes {
            databaseId
            title
            slug
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
