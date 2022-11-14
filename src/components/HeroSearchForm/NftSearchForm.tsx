import React, { useEffect, useState } from "react";

import ButtonPrimary from "shared/Button/ButtonPrimary";
import { FC } from "react";
import ItemTypeSelect from "./ItemTypeSelect";
import LocationInput from "./LocationInput";
import PriceRangeInput from "./PriceRangeInput";
import PropertyTypeSelect from "./PropertyTypeSelect";

export interface NftSearchFormProps {
  haveDefaultValue?: boolean;
}

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";

const NftSearchForm: FC<NftSearchFormProps> = ({
  haveDefaultValue = false,
}) => {
  const [locationInputValue, setLocationInputValue] = useState("");

  //
  useEffect(() => {
    if (haveDefaultValue) {
      setLocationInputValue(defaultLocationValue);
    }
  }, [haveDefaultValue]);
  //

  const renderForm = () => {
    return (
      <div className="w-1/3 content-center h-24 relative xl:mt-8 flex flex-col lg:flex-row rounded-[30px] md:rounded-[36px] lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0">
        <div >
        <ButtonPrimary>
         Play 
        </ButtonPrimary>
        </div>
        
      </div>
    );
  };

  return renderForm();
};

export default NftSearchForm;
