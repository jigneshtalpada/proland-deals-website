import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import AgentMain from '../components/inner-pages/agent/agent';

const Agent = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Agent - Proland Deals'} />
         <AgentMain />
      </Wrapper>
   );
};

export default Agent;