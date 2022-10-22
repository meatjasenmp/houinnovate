import { projectOpportunitiesSelect_projectBasedOpportunities_edges } from "../pages/api/__generated__/projectOpportunitiesSelect";
import SelectComponent from "./SelectComponent";
import { optionSelectItems } from "./helpers";
import styles from "../styles/components/PopUpLink.module.css";
import PopUpLinks from "./PopUpLinks";
import OpportunityPopUp from "./OpportunityPopUp";
import { Dispatch, SetStateAction } from "react";
import { Options, PopUpTypes } from "./helpers";
import { communityInvestmentsSelect_communityInvestments_edges } from "../pages/api/__generated__/communityInvestmentsSelect";
import CommunityInvestmentPopUp from "./CommunityInvestmentPopUp";

export interface PopUpSelectProps {
  popUps: {
    currentInvestmentID: string | null | undefined;
    setCurrentInvestmentID: Dispatch<SetStateAction<string | null | undefined>>;
    setSelectedOptions: Dispatch<SetStateAction<Options[] | null | undefined>>;
    selectedOption: Options | null | undefined;
    setSelectedOption: Dispatch<SetStateAction<Options | null | undefined>>;
    selectedPopups:
      | (projectOpportunitiesSelect_projectBasedOpportunities_edges | null)[]
      | (communityInvestmentsSelect_communityInvestments_edges | null)[]
      | null
      | undefined;
    handleOpenModal: (id: string) => void;
    optionsArray: Options[];
    popUpType: PopUpTypes;
  };
}
const PopUpSelect = ({ popUps }: PopUpSelectProps) => {
  if (popUps) {
    const {
      currentInvestmentID,
      setCurrentInvestmentID,
      setSelectedOptions,
      selectedOption,
      setSelectedOption,
      selectedPopups,
      handleOpenModal,
      optionsArray,
      popUpType,
    } = popUps;

    return (
      <section>
        <>
          <div style={{ marginTop: "2rem", maxWidth: "600px" }}>
            <SelectComponent
              options={optionSelectItems(optionsArray)}
              setSelectedOptions={setSelectedOptions}
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
            />
            {selectedPopups && selectedPopups.length > 0 && (
              <div className={styles.pop_up__links_count}>
                {selectedPopups?.length}{" "}
                {selectedPopups?.length === 1 ? "Result" : "Results"}
              </div>
            )}
          </div>
          <div className={styles.pop_up__links_container}>
            {selectedPopups &&
              selectedPopups.map((popup, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleOpenModal(String(popup?.node?.databaseId))
                  }
                  className={styles.pop_up__link_container}
                >
                  <PopUpLinks link={popup?.node} popUpType={popUpType} />
                  {popUpType === PopUpTypes.OPPORTUNITY && (
                    <OpportunityPopUp
                      setCurrentInvestmentID={setCurrentInvestmentID}
                      currentID={String(currentInvestmentID)}
                      id={String(popup?.node?.databaseId)}
                    />
                  )}
                  {popUpType === PopUpTypes.INVESTMENT && (
                    <CommunityInvestmentPopUp
                      setCurrentInvestmentID={setCurrentInvestmentID}
                      currentID={String(currentInvestmentID)}
                      id={String(popup?.node?.databaseId)}
                    />
                  )}
                </div>
              ))}
          </div>
        </>
      </section>
    );
  }
  return <></>;
};

export default PopUpSelect;
