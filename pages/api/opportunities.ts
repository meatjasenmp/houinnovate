import { useQuery, gql } from "@apollo/client";

import { opportunities } from "./__generated__/opportunities";

export const useOpportunities = () => {
  const { data, loading, error } = useQuery<opportunities>(gql`
    query opportunities {
      opportunityTypes {
        edges {
          node {
            databaseId
            slug
            name
          }
        }
      }
      projectBasedOpportunities {
        nodes {
          databaseId
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
    }
  `);

  return {
    data,
    loading,
    error,
  };
};
