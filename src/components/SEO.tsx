import { Helmet } from "react-helmet-async";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SEO = ({ pageTitle }: any) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} - Real Estate</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Proland Deals - Real Estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
    </>
  );
};

export default SEO;