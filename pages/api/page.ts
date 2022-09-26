import { useQuery, gql } from "@apollo/client";

export const usePage = (id: number) => {
  const { data, loading, error } = useQuery(
    gql`
      query pages($id: Int!) {
        page(id: $id, idType: DATABASE_ID) {
          id
          title
        }
      }
    `,
    {
      variables: { id },
    }
  );

  return { data, loading, error };
};
