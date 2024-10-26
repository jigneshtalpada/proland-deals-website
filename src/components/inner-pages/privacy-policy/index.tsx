import FooterFive from '../../../layouts/footers/FooterFive'
import HeaderOne from '../../../layouts/headers/HeaderOne'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import PrivacyPolicyArea from './PrivacyPolicyArea'

const PrivacyPolicy = () => {
   return (
      <>
         <HeaderOne/>
         <BreadcrumbOne title="Privacy Policy" link="privacy_policy" link_title="Privacy Policy" style={true} />
         <PrivacyPolicyArea/>
         <FooterFive />
      </>
   )
}

export default PrivacyPolicy
