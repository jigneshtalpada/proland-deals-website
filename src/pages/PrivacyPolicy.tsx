import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import PrivacyPolicyMain from '../components/inner-pages/privacy-policy';

const PrivacyPolicy = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Privacy Policy - Proland Deals'} />
         <PrivacyPolicyMain />
      </Wrapper>
   );
};

export default PrivacyPolicy