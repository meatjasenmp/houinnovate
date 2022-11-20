import { useQuery, useLazyQuery, gql } from "@apollo/client";
import {
  allOpportunities,
  allOpportunitiesVariables,
} from "../opportunities/__generated__/allOpportunities";
import {
  opportunitiesByCategory,
  opportunitiesByCategoryVariables,
} from "./__generated__/opportunitiesByCategory";

const OPPORTUNITIES_BY_CATEGORY = gql`
  query opportunitiesByCategory($first: Int, $after: String, $terms: [String]) {
    iONJobs(
      first: $first
      after: $after
      where: {
        taxQuery: {
          taxArray: [
            { terms: $terms, taxonomy: JOBCATEGORY, operator: IN, field: SLUG }
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
        }
      }
    }
  }
`;

const OPPORTUNITIES = gql`
  query allOpportunities($first: Int, $after: String) {
    iONJobs(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          title
          databaseId
        }
      }
    }
  }
`;

export const useJobOpportunitiesByCategory = (
  category: (string | null)[] | null | undefined
) => {
  const [getOpportunities, { loading, error, data, fetchMore }] = useLazyQuery<
    opportunitiesByCategory,
    opportunitiesByCategoryVariables
  >(OPPORTUNITIES_BY_CATEGORY, {
    fetchPolicy: "no-cache",
    nextFetchPolicy: "cache-and-network",
    variables: {
      first: 5,
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

export const useJobOpportunities = () => {
  const { data, loading, error, fetchMore, refetch } = useQuery<
    allOpportunities,
    allOpportunitiesVariables
  >(OPPORTUNITIES, {
    variables: {
      first: 5,
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
