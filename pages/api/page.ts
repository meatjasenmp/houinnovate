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
                showHeader
                header
                contentBlockContent: content
                backgroundColor
                textColor
                showSubheader
                subheader
              }
              ... on Page_Components_ComponentBlocks_ContentBlockStylizedList {
                header
                contentBlockStylized: content
                list {
                  listItem {
                    listContent
                    listBackgroundColor: backgroundColor
                  }
                }
                showFooterText
                footerText
              }
              ... on Page_Components_ComponentBlocks_Phases {
                accentColor
                phasesHeader: header
                phasesList {
                  phase {
                    phaseText
                    phaseHeader
                  }
                }
              }
              ... on Page_Components_ComponentBlocks_WorkWithIon {
                workWithIonHeader: header
                workWithIonContent: content
              }
              ... on Page_Components_ComponentBlocks_ProjectBasedOpportunities {
                opportunitiesCreated {
                  opportunitiesCreated: created
                  opportunitiesCommitted: committed
                }
                header
                subHeader
              }
              ... on Page_Components_ComponentBlocks_CommunityInvestment {
                deployment {
                  deployed
                  committed
                }
                communityInvestmentSubHeader: subHeader
                communityInvestmentHeader: header
              }
            }
          }
        }
        generalSettings {
          title
          description
        }
        siteOptionsPage {
          jobOpportunity {
            jobOpportunityCta
          }
          siteNavigation {
            navigation {
              sectionLinks {
                label
                anchorLabel
              }
              blockLinks {
                label
                links {
                  label
                  pageUrl
                }
              }
              houinnovate
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
