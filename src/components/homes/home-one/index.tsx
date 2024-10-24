// import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import Banner from "./Banner"
import Feedback from "./Feedback"
import BLockFeatureOne from "./BLockFeatureOne"
import BLockFeatureTwo from "./BLockFeatureTwo"
// import BLockFeatureThree from "./BLockFeatureThree"
import Property from "./Property"
// import FancyBannerOne from "./FancyBannerOne"
// import AgentArea from "./AgentArea"
import BLockFeatureFour from "./BLockFeatureFour"
import BLockFeatureFive from "./BLockFeatureFive"
import FancyBannerThree from "./FancyBannerThree"
import FancyBanner from "../../../components/common/FancyBanner"
// import FooterTwo from "../../../layouts/footers/FooterTwo"
// import FooterThree from "../../../layouts/footers/FooterThree"
import FooterFive from "../../../layouts/footers/FooterFive"
const HomeOne = () => {

  return (
    <>
      <HeaderOne />
      <Banner />
      <Feedback />
      <BLockFeatureOne />
      <BLockFeatureTwo />
      {/* <BLockFeatureThree /> */}
      <Property />
      {/* <FancyBannerOne style={false} /> */}
      {/* <AgentArea style={false} /> */}
      <BLockFeatureFour />
      <BLockFeatureFive style={false} />
       
      <FancyBanner style={false} />
      <FancyBannerThree /> 
      <FooterFive />
    </>
  )
}

export default HomeOne
