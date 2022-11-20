import { useQuery, gql } from "@apollo/client";
import { opportunityTypes } from "./__generated__/opportunityTypes";

const OPPORTUNITY_TYPES = gql`
  query opportunityTypes {
    opportunityTypes {
      edges {
        node {
          databaseId
          slug
          name
          pages: projectBasedOpportunities {
            nodes {
              id
            }
          }
        }
      }
    }
  }
`;

export const useOpportunityCategories = () => {
  const { data, loading, error } =
    useQuery<opportunityTypes>(OPPORTUNITY_TYPES);

  return {
    data,
    loading,
    error,
  };
};
