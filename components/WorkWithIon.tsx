import ContentEditor from "./ContentEditor";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon } from "../pages/api/__generated__/page";
import styles from "../styles/components/WorkWithIon.module.css";

interface WorkWithIonProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon;
}
const WorkWithIon = ({ blockContent }: WorkWithIonProps) => {
  return (
    <div className={styles.work_with_ion}>
      <div className={styles.work_with_ion_wrapper}>
        <ContentEditor content={blockContent.workWithIonContent} />
      </div>
    </div>
  );
};

export default WorkWithIon;
