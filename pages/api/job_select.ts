import { useQuery, gql } from "@apollo/client";
import { iONJobSelect } from "./__generated__/iONJobSelect";

export const useJobSelect = () => {
  const { data, loading, error } = useQuery<iONJobSelect>(
    gql`
      query iONJobSelect {
        iONJobs {
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
    `
  );

  return {
    data,
    loading,
    error,
  };
};
