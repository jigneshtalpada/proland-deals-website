// import FooterFour from "../../../layouts/footers/FooterFour";
import FooterFive from "../../../layouts/footers/FooterFive";
// import FooterOne from "../../../layouts/footers/FooterOne";
// import HeaderFour from "../../../layouts/headers/HeaderFour";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FancyBanner from "../../common/FancyBanner";
import BreadcrumbThree from "../../common/breadcrumb/BreadcrumbThree";
import BlogOneArea from "./BlogOneArea"

const BlogOne = () => {
   return (
      <>
         <HeaderOne />
         <BreadcrumbThree title="Blog" link="#" link_title="Blog" style={false} />
         <BlogOneArea />
         <FancyBanner />
         <FooterFive />
      </>
   )
}

export default BlogOne;
