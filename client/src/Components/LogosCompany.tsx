import logo1 from "../../public/images/logosCompany/ericsson.svg";
import logo2 from "../../public/images/logosCompany/citi.svg";
import logo3 from "../../public/images/logosCompany/hewlett_packard_enterprise.svg";
import logo4 from "../../public/images/logosCompany/procter_gamble.svg";
import logo5 from "../../public/images/logosCompany/att.svg";
import logo6 from "../../public/images/logosCompany/cisco.svg";
import logo7 from "../../public/images/logosCompany/samsung.svg";
import logo8 from "../../public/images/logosCompany/volkswagen.svg";

const LogosComponent = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <div className="h-25vh justify-center bg-Udemygray-100 mb-12 ">
      <h2 className="text-[1.2rem] text-center text-Udemygray-300 mt-12 font-[450] mb-5 pt-16 ">
        Trusted by over 15,000 companies and millions of learners around the
        world
      </h2>
      <div className="h-100vh justify-center flex">
        {logos.map((logo, index) => (
          <img
            className="ml-10 mr-10 mb-20"
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogosComponent;
