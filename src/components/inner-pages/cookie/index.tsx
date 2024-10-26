import FooterFive from '../../../layouts/footers/FooterFive'
import HeaderOne from '../../../layouts/headers/HeaderOne'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import CookiesPolicyArea from './CookieArea'

const Cookies = () => {
   return (
      <>
         <HeaderOne/>
         <BreadcrumbOne title="Cookie" link="cookie" link_title="Cookie" style={true} />
         <CookiesPolicyArea/>
         <FooterFive />
      </>
   )
}

export default Cookies
