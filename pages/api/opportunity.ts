import { useQuery, gql } from "@apollo/client";

import {
  projectBasedOpportunity,
  projectBasedOpportunityVariables,
} from "./__generated__/projectBasedOpportunity";

export const useOpportunity = (id: string) => {
  const { data, loading, error } = useQuery<
    projectBasedOpportunity,
    projectBasedOpportunityVariables
  >(
    gql`
      query projectBasedOpportunity($id: ID!) {
        projectBasedOpportunity(id: $id, idType: DATABASE_ID) {
          databaseId
          slug
          title
          opportunity {
            title
            contactInfo {
              name
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
              description
              category {
                id
                slug
                name
              }
              downloads {
                downloadLabel
                file {
                  id
                  mediaItemUrl
                }
              }
              specifications {
                specificationDownloadLabel: downloadLabel
                specificationFile: file {
                  id
                  mediaItemUrl
                }
              }
              addenda {
                addendaDownloadLabel: downloadLabel
                addendaFile: file {
                  id
                  mediaItemUrl
                }
              }
              aaeeo
              importantNotice
            }
          }
        }
      }
    `,
    {
      variables: { id },
    }
  );

  return { data, loading, error };
};
