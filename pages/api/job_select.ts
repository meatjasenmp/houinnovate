import { useQuery, gql } from "@apollo/client";
import { iONJobSelect } from "./__generated__/iONJobSelect";

const JOB_SELECT = gql`
  query iONJobSelect($first: Int, $after: String) {
    iONJobs(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          databaseId
          title
          ... on IONJob {
            jobPosting {
              metaData {
                jobType {
                  slug
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const useJobSelect = () => {
  const { data, loading, error, fetchMore } = useQuery<iONJobSelect>(
    JOB_SELECT,
    {
      variables: {
        first: 5,
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
