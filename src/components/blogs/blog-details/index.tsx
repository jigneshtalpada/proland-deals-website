// import FooterFour from "../../../layouts/footers/FooterFour"
import FooterOne from "../../../layouts/footers/FooterOne"
// import HeaderFour from "../../../layouts/headers/HeaderFour"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import FancyBanner from "../../common/FancyBanner"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <HeaderOne />
         <BlogDetailsArea />
         <FancyBanner />
         <FooterOne style={true}/>
      </>
   )
}

export default BlogDetails
