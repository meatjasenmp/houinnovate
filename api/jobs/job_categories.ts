import { useQuery, gql } from "@apollo/client";
import { jobCategories } from "./__generated__/jobCategories";

const JOB_CATEGORIES = gql`
  query jobCategories {
    jobCategories {
      edges {
        node {
          databaseId
          slug
          name
          pages: iONJobs {
            nodes {
              id
            }
          }
        }
      }
    }
  }
`;

export const useJobCategories = () => {
  const { data, loading, error } = useQuery<jobCategories>(JOB_CATEGORIES);

  return {
    data,
    loading,
    error,
  };
};
