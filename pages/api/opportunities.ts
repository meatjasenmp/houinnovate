import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { allOpportunities } from "./__generated__/allOpportunities";
import { opportunitiesByCategory } from "./__generated__/opportunitiesByCategory";

const OPPORTUNITIES_BY_CATEGORY = gql`
  query opportunitiesByCategory($first: Int, $after: String, $terms: [String]) {
    iONJobs(
      first: $first
      after: $after
      where: {
        taxQuery: {
          relation: OR
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

export const useJobOpportunitiesByCategory = (category: string) => {
  const [getOpportunities, { loading, error, data, fetchMore }] =
    useLazyQuery<opportunitiesByCategory>(OPPORTUNITIES_BY_CATEGORY, {
      fetchPolicy: "no-cache",
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
  const { data, loading, error, fetchMore } = useQuery<allOpportunities>(
    OPPORTUNITIES,
    {
      fetchPolicy: "no-cache",
      variables: {
        first: 5,
        after: null,
      },
    }
  );

  return {
    data,
    loading,
    error,
    fetchMore,
  };
};
