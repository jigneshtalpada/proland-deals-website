// import FooterFour from "../../../layouts/footers/FooterFour";
import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FancyBanner from "../../common/FancyBanner";
import ListingFourArea from "./ListingFourArea"

const ListingFour = () => {
   return (
      <>
         <HeaderOne  />
         <ListingFourArea />
         <FancyBanner />
         <FooterOne style={true} />
      </>
   )
}

export default ListingFour;
