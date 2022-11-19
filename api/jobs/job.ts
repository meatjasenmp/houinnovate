import { useQuery, gql } from "@apollo/client";
import { iONJobs, iONJobsVariables } from "../__generated__/iONJobs";

export const useJob = (id: string) => {
  const { data, loading, error } = useQuery<iONJobs, iONJobsVariables>(
    gql`
      query iONJobs($id: ID!) {
        iONJob(id: $id, idType: DATABASE_ID) {
          id
          title
          postDate: date
          ... on IONJob {
            jobPosting {
              title
              contact {
                name
                title
                email
                phone
              }
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
                  name
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
            jobOpportunityCta
            aaEeo
            opportunitySignupCta
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
