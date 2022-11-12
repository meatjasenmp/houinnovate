import ContentEditor from "../ContentEditor";
import JobSelect from "./JobSelect";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon } from "../../pages/api/__generated__/page";
import styles from "../../styles/components/WorkWithIon.module.css";
import { useEffect, useRef } from "react";
import ArrowRightIcon from "../ArrowRightIcon";

interface WorkWithIonProps {
  blockContent: page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon;
}
const WorkWithIon = ({ blockContent }: WorkWithIonProps) => {
  const contentWrapper = useRef<HTMLDivElement>(null);
  const { workWithIonContent, cta, scrollId, selectText } = blockContent;

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
    <div className={styles.work_with_ion} id={String(scrollId)}>
      <div className={styles.work_with_ion_wrapper} ref={contentWrapper}>
        <div className={styles.work_with_ion__content}>
          <div className={styles.ion_header}>
            <h1>{workWithIonContent}</h1>
          </div>
          <div className={styles.cta}>
            <figure className={styles.cta_icon}>
              <ArrowRightIcon />
            </figure>
            <ContentEditor content={cta} />
          </div>
        </div>
        <span className={styles.select_text}>{selectText}</span>
        <JobSelect />
      </div>
    </div>
  );
};

export default WorkWithIon;
