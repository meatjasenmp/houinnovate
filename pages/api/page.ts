import { useQuery, gql } from "@apollo/client";
import {
  page,
  pageVariables,
  page_generalSettings,
} from "./__generated__/page";

export const usePage = (id: string) => {
  const { data, loading, error } = useQuery<page, pageVariables>(
    gql`
      query page($id: ID!) {
        page(id: $id, idType: DATABASE_ID) {
          id
          title
          components {
            componentBlocks {
              __typename
              ... on Page_Components_ComponentBlocks_HeroBanner {
                type
                video {
                  id
                  mediaItemUrl
                }
                image {
                  id
                  mediaItemUrl
                }
                header
                content {
                  contentEditor
                  pageLinkSelect
                  pageLinkButton {
                    label
                    link {
                      target
                      title
                      url
                    }
                  }
                }
                videoCta
              }
            }
          }
        }
        generalSettings {
          title
          description
        }
      }
    `,
    {
      variables: { id },
    }
  );

  return { data, loading, error };
};
