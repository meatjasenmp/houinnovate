import { useQuery, gql } from "@apollo/client";
import { jobCategories } from "./__generated__/jobCategories";

const JOB_CATEGORIES = gql`
  query jobCategories {
    jobCategories {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          databaseId
          slug
          name
        }
      }
    }
  }
`;

export const useJobCategories = () => {
  const { data, loading, error, fetchMore } = useQuery<jobCategories>(
    JOB_CATEGORIES,
    {
      variables: {
        slug: null,
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
