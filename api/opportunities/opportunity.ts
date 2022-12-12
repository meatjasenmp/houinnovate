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
          communityAndOpportunityPopUps {
            alphanumericLabel
            dataFields {
              dataField {
                labelField
                contentField
              }
            }
            contentBlocks {
              content
            }
            progress {
              showProgressLabel
              progressLabel
              committed
              deployed
              currentPhase
              progressPercentage
              phases {
                phasePercentageType
                opportunityPhases
                investmentPhases
              }
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
