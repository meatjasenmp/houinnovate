import { useQuery, gql } from "@apollo/client";
import { communityInvestmentTypes } from "./__generated__/communityInvestmentTypes";

const COMMUNITY_INVESTMENT_TYPES = gql`
  query communityInvestmentTypes {
    communityInvestmentTypes {
      edges {
        node {
          databaseId
          slug
          name
          pages: communityInvestments {
            nodes {
              id
            }
          }
        }
      }
    }
  }
`;

export const useInvestmentCategories = () => {
  const { data, loading, error } = useQuery<communityInvestmentTypes>(
    COMMUNITY_INVESTMENT_TYPES
  );

  return {
    data,
    loading,
    error,
  };
};
