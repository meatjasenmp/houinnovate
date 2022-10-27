import { useRouter } from "next/router";
import JobPosting from "../../../components/jobPosting/JobPosting";

const OpportunityPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <></>;

  return <JobPosting id={String(id)} />;
};

export default OpportunityPage;
