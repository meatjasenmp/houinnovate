import { useQuery, gql } from "@apollo/client";

export const usePage = (id: number) => {
  const { data, loading, error } = useQuery(
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
      }
    `,
    {
      variables: { id },
    }
  );

  return { data, loading, error };
};
