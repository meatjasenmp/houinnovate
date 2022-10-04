import { useQuery, gql } from "@apollo/client";
import { page, pageVariables } from "./__generated__/page";

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
                  altText
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
              ... on Page_Components_ComponentBlocks_BoxLinks {
                boxLink {
                  image {
                    id
                    mediaItemUrl
                    altText
                  }
                  header
                  copy
                  link {
                    linkType
                    pageLink {
                      url
                      title
                      target
                    }
                    anchorLink
                  }
                  backgroundColor
                }
              }
              ... on Page_Components_ComponentBlocks_ContentBlock {
                header
                contentBlockContent: content
                backgroundColor
                textColor
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
