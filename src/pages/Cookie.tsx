import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Cookies from '../components/inner-pages/cookie';

const Cookie = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Cookie - Proland Deals'} />
         <Cookies />
      </Wrapper>
   );
};

export default Cookie