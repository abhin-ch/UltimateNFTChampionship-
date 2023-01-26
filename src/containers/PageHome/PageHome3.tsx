import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import React from "react";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionGridFeatureNFT2 from "./SectionGridFeatureNFT2";
import SectionHero3 from "components/SectionHero/SectionHero3";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import SectionMagazine8 from "components/SectionMagazine8";
import SectionSliderCardNftVideo from "components/SectionSliderCardNftVideo";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionSliderCollections from "components/SectionSliderCollections";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";

function PageHome3() {
  return (
    <div className="nc-PageHome3 relative overflow-hidden">
      <div>
        {/* Top Banner */}
        <SectionHero3 />
      </div>
    </div>
  );
}

export default PageHome3;
