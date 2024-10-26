import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TermAndConditions from '../components/inner-pages/term-and-conditions';

const TermConditions = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Terms & Conditions - Proland Deals'} />
         <TermAndConditions />
      </Wrapper>
   );
};

export default TermConditions;