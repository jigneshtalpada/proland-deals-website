import FooterFive from '../../../layouts/footers/FooterFive'
// import FooterFour from '../../../layouts/footers/FooterFour'
import HeaderOne from '../../../layouts/headers/HeaderOne'
import FancyBanner from '../../common/FancyBanner'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import FaqArea from './FaqArea'

const Faq = () => {
   return (
      <>
         <HeaderOne/>
         <BreadcrumbOne title="Question & Answers" link="#" link_title="Faq's" style={true} />
         <FaqArea/>
         <FancyBanner style={false} />
         <FooterFive />
      </>
   )
}

export default Faq
