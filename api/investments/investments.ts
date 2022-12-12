import { useQuery, useLazyQuery, gql } from "@apollo/client";
import {
  allInvestments,
  allInvestmentsVariables,
} from "./__generated__/allInvestments";
import {
  investmentsByCategory,
  investmentsByCategoryVariables,
} from "./__generated__/investmentsByCategory";

const INVESTMENTS_BY_CATEGORY = gql`
  query investmentsByCategory($first: Int, $after: String, $terms: [String]) {
    communityInvestments(
      first: $first
      after: $after
      where: {
        taxQuery: {
          taxArray: [
            {
              terms: $terms
              taxonomy: COMMUNITYINVESTMENTTYPE
              operator: IN
              field: SLUG
            }
          ]
        }
      }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          title
          databaseId
          slug
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
              progressPercentage
              phases {
                phasePercentageType
                opportunityPhases
                investmentPhases
              }
            }
          }
        }
      }
    }
  }
`;

const INVESTMENTS = gql`
  query allInvestments($first: Int, $after: String) {
    communityInvestments(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          title
          databaseId
          slug
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
              progressPercentage
              phases {
                phasePercentageType
                opportunityPhases
                investmentPhases
              }
            }
          }
        }
      }
    }
  }
`;

export const useInvestmentsByCategory = (
  category: (string | null)[] | null | undefined
) => {
  const [getInvestments, { loading, error, data, fetchMore }] = useLazyQuery<
    investmentsByCategory,
    investmentsByCategoryVariables
  >(INVESTMENTS_BY_CATEGORY, {
    fetchPolicy: "no-cache",
    nextFetchPolicy: "cache-and-network",
    variables: {
      first: 50,
      terms: category,
    },
  });

  return {
    data,
    loading,
    error,
    fetchMore,
    getInvestments,
  };
};

export const useInvestments = () => {
  const { data, loading, error, fetchMore, refetch } = useQuery<
    allInvestments,
    allInvestmentsVariables
  >(INVESTMENTS, {
    variables: {
      first: 50,
      after: null,
    },
  });

  return {
    data,
    loading,
    error,
    fetchMore,
    refetch,
  };
};
