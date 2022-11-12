import ContentEditor from "./ContentEditor";
import JobSelect from "./JobSelect";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon } from "../pages/api/__generated__/page";
import styles from "../styles/components/WorkWithIon.module.css";
import { useEffect, useRef } from "react";
import ArrowRightIcon from "./ArrowRightIcon";

interface WorkWithIonProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon;
}
const WorkWithIon = ({ blockContent }: WorkWithIonProps) => {
  const contentWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentWrapper.current) {
      const content = contentWrapper.current;
      const headers = content.querySelectorAll("h1");

      headers.forEach((item) => {
        const headerItem = item as HTMLElement;
        const words = headerItem.innerText.split(" ");

        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          if (i === 0) {
            headerItem.innerHTML = `<span class="underline text-underline-red">${word}</span>`;
          } else {
            headerItem.innerHTML += ` <span class="underline text-underline-red">${word}</span>`;
          }
        }
      });
    }
  }, []);
  return (
    <div className={styles.work_with_ion} id={String(blockContent.scrollId)}>
      <div className={styles.work_with_ion_wrapper} ref={contentWrapper}>
        <div className={styles.work_with_ion__content}>
          <ContentEditor content={blockContent.workWithIonContent} />
        </div>
        <JobSelect />
      </div>
    </div>
  );
};

export default WorkWithIon;
