import FooterFive from '../../../layouts/footers/FooterFive'
import HeaderOne from '../../../layouts/headers/HeaderOne'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import TermsAndConditionsArea from './TermsAndConditionsArea'

const TermAndConditions = () => {
   return (
      <>
         <HeaderOne/>
         <BreadcrumbOne title="Terms & Conditions" link="terms_and_conditions" link_title="Terms & Conditions" style={true} />
         <TermsAndConditionsArea/>
         <FooterFive />
      </>
   )
}

export default TermAndConditions
