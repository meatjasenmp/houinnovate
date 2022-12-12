import { useQuery, useLazyQuery, gql } from "@apollo/client";
import {
  projectOpportunitiesByCategory,
  projectOpportunitiesByCategoryVariables,
} from "./__generated__/projectOpportunitiesByCategory";
import {
  allProjectOpportunities,
  allProjectOpportunitiesVariables,
} from "./__generated__/allProjectOpportunities";

const PROJECT_OPPORTUNITIES_BY_CATEGORY = gql`
  query projectOpportunitiesByCategory(
    $first: Int
    $after: String
    $terms: [String]
  ) {
    projectBasedOpportunities(
      first: $first
      after: $after
      where: {
        taxQuery: {
          taxArray: [
            {
              terms: $terms
              taxonomy: OPPORTUNITYTYPE
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

const PROJECT_OPPORTUNITIES = gql`
  query allProjectOpportunities($first: Int, $after: String) {
    projectBasedOpportunities(first: $first, after: $after) {
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

export const useOpportunitiesByCategory = (
  category: (string | null)[] | null | undefined
) => {
  const [getOpportunities, { loading, error, data, fetchMore }] = useLazyQuery<
    projectOpportunitiesByCategory,
    projectOpportunitiesByCategoryVariables
  >(PROJECT_OPPORTUNITIES_BY_CATEGORY, {
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
    getOpportunities,
  };
};

export const useOpportunities = () => {
  const { data, loading, error, fetchMore, refetch } = useQuery<
    allProjectOpportunities,
    allProjectOpportunitiesVariables
  >(PROJECT_OPPORTUNITIES, {
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
