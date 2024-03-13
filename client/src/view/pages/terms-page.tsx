import React, { useEffect, useState } from "react";
import TermsNavBar from "../../Components/termsNavBar/TermsNavBar";
import TermsPart from "../../Components/termsParts/TermsPart";
import PrivacyPart from "../../Components/termsParts/PrivacyPart"
import IntellectualPart from "../../Components/termsParts/IntellectualPart"
import InstructorPart from "../../Components/termsParts/InstructorPart"
import AffiliatePart from "../../Components/termsParts/AffiliatePart"
import LunchServicesPart from "../../Components/termsParts/LunchServicesPart"

const termsPage = () => {
    const [href,setHref] = useState<string>("terms")

    const getHref = (href:string) => {
        setHref(href)
    }

  return (
    <div className=" h-fit w-screen flex flex-row items-start justify-start mb-8">
    <TermsNavBar sendHref={getHref}/>
      <div className=" flex-grow">
        {href === "terms" && <TermsPart/>}
        {href === "privacy" && <PrivacyPart/>}
        {href === "copyright" && <IntellectualPart/>}
        {href === "instructor" && <InstructorPart/>}
        {href === "affiliate" && <AffiliatePart/>}
        {href === "launch-services" && <LunchServicesPart/>}

      </div>
    </div>
  );
};

export default termsPage;
