import { useQuery, gql } from "@apollo/client";
import { iONJob, iONJobVariables } from "./__generated__/iONJob";

export const useJob = (id: string) => {
  const { data, loading, error } = useQuery<iONJob, iONJobVariables>(
    gql`
      query iONJobs($id: ID!) {
        iONJob(id: $id, idType: DATABASE_ID) {
          id
          title
          ... on IONJob {
            jobPosting {
              title
              dataFields {
                dataField {
                  labelField
                  contentField
                }
              }
              metaData {
                status
                solicitationNumber
                opportunityOpensOn
                opportunityClosesOn
                department
                jobType {
                  id
                  slug
                }
                description
                downloads {
                  downloadLabel
                  file {
                    id
                    mediaItemUrl
                    altText
                    description
                  }
                }
                specifications {
                  specificationDownloadLabel: downloadLabel
                  specificationFile: file {
                    id
                    mediaItemUrl
                    altText
                    description
                  }
                }
                addenda {
                  addendaFileLabel: downloadLabel
                  addendaFile: file {
                    id
                    mediaItemUrl
                    altText
                    description
                  }
                }
              }
            }
          }
        }
        siteOptionsPage {
          opportunityPageOptions {
            opportunityImportantNotice
          }
        }
      }
    `,
    {
      variables: {
        id,
      },
    }
  );

  return {
    data,
    loading,
    error,
  };
};

export default useJob;
