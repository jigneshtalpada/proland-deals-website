// import FooterFour from "../../../../layouts/footers/FooterFour"
import FooterFive from "../../../../layouts/footers/FooterFive"
// import FooterOne from "../../../../layouts/footers/FooterOne"
import HeaderOne from "../../../../layouts/headers/HeaderOne"
import FancyBanner from "../../../common/FancyBanner"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
// import Feedback from "../../../homes/home-five/Feedback"
// import AgentArea from "../../../homes/home-one/AgentArea"
import BLockFeatureFive from "../../../homes/home-one/BLockFeatureFive"
import VideoBanner from "../../../homes/home-seven/VideoBanner"
import BLockFeatureOne from "./BLockFeatureOne"

const AboutUsOne = () => {
   return (
      <>
         <HeaderOne/>
         <BreadcrumbOne title="About Us" sub_title="About us" style={false} />
         <BLockFeatureOne />
         <VideoBanner />
         <BLockFeatureFive style={true} />
         {/* <Feedback style={true} /> */}
         {/* <AgentArea style={false} /> */}
         {/* <Brand /> */}
         <FancyBanner style={false} />
         <FooterFive />
      </>
   )
}

export default AboutUsOne
