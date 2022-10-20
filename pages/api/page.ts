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
                video {
                  id
                  mediaItemUrl
                }
                contentBlocks {
                  contentBlock
                }
                videoCta
                videoUrl
              }
              ... on Page_Components_ComponentBlocks_BoxLinks {
                boxLink {
                  image {
                    id
                    mediaItemUrl
                    altText
                  }
                  boxLinkContent: content
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
                contentBlockContent: content
                contentBlockColumnContent: contentColumns {
                  content
                }
                contentType
                backgroundColor
              }
              ... on Page_Components_ComponentBlocks_ContentBlockStylizedList {
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
                phasesContent: content
                phasesList {
                  phase {
                    phaseText
                    phaseHeader
                  }
                }
              }
              ... on Page_Components_ComponentBlocks_WorkWithIon {
                workWithIonContent: content
              }
              ... on Page_Components_ComponentBlocks_ProjectBasedOpportunities {
                opportunitiesCreated {
                  committedLabel
                  createdLabel
                  opportunitiesCreated: created
                  opportunitiesCommitted: committed
                }
                opportunitiesCreatedContent: content
              }
              ... on Page_Components_ComponentBlocks_CommunityInvestment {
                deployment {
                  deployedLabel
                  investmentCommittedLabel: committedLabel
                  deployed
                  committed
                }
                communityInvestmentContent: content
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
          siteFooter {
            footerHeader
            footerBlocks {
              ... on SiteOptionsPage_Sitefooter_FooterBlocks_GetInTouch {
                contentBlocks {
                  content
                }
              }
              ... on SiteOptionsPage_Sitefooter_FooterBlocks_IonDistrict {
                ionLogo {
                  id
                  mediaItemUrl
                  altText
                }
                address
                socialMedia {
                  header
                  socialMediaLink {
                    label
                    url
                  }
                }
                ctaLinks {
                  cta
                }
              }
              ... on SiteOptionsPage_Sitefooter_FooterBlocks_RiceUniversity {
                riceUniversityLogo {
                  id
                  mediaItemUrl
                  altText
                }
                riceAddress: address
                riceSocialMedia: socialMedia {
                  riceSocialHeader: header
                  riceSocialMediaLink: socialMediaLink {
                    label
                    url
                  }
                }
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
