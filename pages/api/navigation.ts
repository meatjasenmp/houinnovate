import { useQuery, gql } from "@apollo/client";
import { navigation } from "./__generated__/navigation";

export const useNavigation = () => {
  const { data, loading, error } = useQuery<navigation>(
    gql`
      query navigation {
        siteOptionsPage {
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
    `
  );

  return { data, loading, error };
};
