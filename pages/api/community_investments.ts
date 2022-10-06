import { useQuery, gql } from "@apollo/client";
import { communityInvestments } from "./__generated__/communityInvestments";

export const useCommunityInvestments = () => {
  const { data, loading, error } = useQuery<communityInvestments>(
    gql`
      query communityInvestments {
        communityInvestments {
          edges {
            node {
              databaseId
              slug
              title
              investment {
                alphanumericLabel
                header
                dataFields {
                  dataField {
                    labelField
                    contentField
                  }
                }
                contentBlocks {
                  content
                }
                reportingPhasePercentage
                progress {
                  progressLabel
                  committed
                  deployed
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
