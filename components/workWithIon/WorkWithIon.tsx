import ContentEditor from "../ContentEditor";
import JobSelect from "./JobSelect";
import { page_page_components_componentBlocks_Page_Components_ComponentBlocks_WorkWithIon } from "../../api/__generated__/page";
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
    <div className="pt-8 pb-16" id={String(scrollId)}>
      <div className="max-w-[990px] mx-auto" ref={contentWrapper}>
        <div className="mb-8">
          <div className="max-w-[325px] mr-1">
            <h1>{workWithIonContent}</h1>
          </div>
          <div className={styles.cta}>
            <figure className="w-6 rotate-90">
              <ArrowRightIcon />
            </figure>
            <ContentEditor content={cta} />
          </div>
        </div>
        <div className="mb-6">
          <p>{selectText}</p>
        </div>
        <JobSelect />
      </div>
    </div>
  );
};

export default WorkWithIon;
