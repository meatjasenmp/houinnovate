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
                contentBlocks {
                  contentBlock
                }
                videoCta
                videoUrl
                videoTest {
                  id
                  mediaItemUrl
                }
              }
              ... on Page_Components_ComponentBlocks_BoxLinks {
                scrollId
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
                scrollId
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
                headerUnderlineAccent
                scrollId
                showFooterText
                footerText
              }
              ... on Page_Components_ComponentBlocks_Phases {
                scrollId
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
                scrollId
                workWithIonContent: content
                selectText
                cta
              }
              ... on Page_Components_ComponentBlocks_ProjectBasedOpportunities {
                scrollId
                opportunitiesCreated {
                  committedLabel
                  createdLabel
                  opportunitiesCreated: created
                  opportunitiesCommitted: committed
                  annotation
                }
                opportunitiesCreatedContent: content
              }
              ... on Page_Components_ComponentBlocks_CommunityInvestment {
                scrollId
                deployment {
                  deployedLabel
                  investmentCommittedLabel: committedLabel
                  deployed
                  committed
                  annotation
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
          annualReport {
            annualReportTitle
            annualReportDownload {
              id
              mediaItemUrl
              altText
            }
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
                newsletterCta
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
