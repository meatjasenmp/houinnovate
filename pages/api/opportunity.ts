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
            header
            alphanumericLabel
            progress {
              progressLabel
              committed
              deployed
              currentPhase
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
