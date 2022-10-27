import { useRouter } from "next/router";

const OpportunityPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <></>;
  console.log(id);
  return <></>;
};

export default OpportunityPage;
