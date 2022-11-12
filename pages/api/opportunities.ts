import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { useEffect } from "react";

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
  const [getOpportunities, { loading, error, data, fetchMore }] = useLazyQuery(
    OPPORTUNITIES_BY_CATEGORY,
    {
      variables: {
        first: 5,
        terms: category,
      },
    }
  );

  useEffect(() => {
    getOpportunities();
  }, []);

  return {
    data,
    loading,
    error,
    fetchMore,
  };
};

export const useJobOpportunities = () => {
  const { data, loading, error, fetchMore } = useQuery(OPPORTUNITIES, {
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
  };
};
