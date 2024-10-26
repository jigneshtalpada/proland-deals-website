const cookiesPolicyData = [
    {
       title: "1. Introduction",
       content: "This Cookies Policy explains what cookies are, how we use them on the Proland Deals website ('the Site'), and how you can control them. By using our Site, you consent to the use of cookies in accordance with this policy.",
    },
    {
       title: "2. What Are Cookies?",
       content: "Cookies are small files placed on your device by websites you visit. They are widely used to make websites work, improve user experience, and provide information to website owners. Cookies may store user preferences and other information to deliver a more personalized experience.",
    },
    {
       title: "3. Types of Cookies We Use",
       content: [
          "Essential Cookies: These cookies are necessary for the operation of our Site. They enable core functionalities such as page navigation and access to secure areas.",
          "Performance Cookies: These cookies help us understand how visitors interact with our Site by collecting information anonymously. We use this data to improve the performance and design of our Site.",
          "Functional Cookies: These cookies remember choices you make (such as language preferences) to provide a more personalized experience.",
          "Targeting/Advertising Cookies: These cookies may be set by our advertising partners to profile your interests and display relevant ads on other websites."
       ],
    },
    {
       title: "4. How We Use Cookies",
       content: [
          "Site Performance and Analytics: We use cookies to analyze how our Site is accessed and used, which helps us to improve our Site’s functionality and user experience.",
          "Personalization: Cookies help us remember your preferences and personalize your experience on the Site.",
          "Advertising: Cookies allow us and our advertising partners to show you ads that are relevant to you and measure the effectiveness of our marketing campaigns."
       ],
    },
    {
       title: "5. Managing Cookies",
       content: [
          "Browser Settings: You can adjust your browser settings to refuse cookies or to alert you when cookies are being sent. Note that disabling cookies may affect your experience on our Site.",
          "Opt-Out Tools: You may opt out of certain types of cookies, such as advertising cookies, by using tools available on various platforms or via your browser’s privacy settings."
       ],
    },
    {
       title: "6. Third-Party Cookies",
       content: "Some cookies may be placed by third-party services that appear on our Site. We do not control these third-party cookies, and we encourage you to review their privacy policies and cookie policies to understand how they collect and use data.",
    },
    {
       title: "7. Changes to This Cookies Policy",
       content: "We may update our Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for the latest information on our use of cookies.",
    },
    {
       title: "8. Contact Us",
       content: "If you have any questions about our use of cookies or this Cookies Policy, please contact us at [Insert Contact Information].",
    }
];

const CookiesPolicyArea = () => {
    return (
       <div className="cookies-section mt-20 xl-mt-20 pt-20 xl-pt-20 mb-150 xl-mb-100">
          <div className="container">
             <div className="row gx-xl-5">
                <div className="col-lg-12">
                   {cookiesPolicyData.map((policy, index) => (
                      <article key={index} className="blog-post-meta mb-4">
                         <div className="post-data pt-50 md-pt-30">
                            <h5>{policy.title}</h5>
                            {Array.isArray(policy.content) ? (
                               policy.content.map((text, i) => <p key={i}>{text}</p>)
                            ) : (
                               <p>{policy.content}</p>
                            )}
                         </div>
                      </article>
                   ))}
                </div>
             </div>
          </div>
       </div>
    );
};

export default CookiesPolicyArea;
