import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import BlogOneMain from '../components/blogs/blog-one'

const BlogOne = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Blog - Proland Deals'} />
         <BlogOneMain />
      </Wrapper>
   );
};

export default BlogOne;