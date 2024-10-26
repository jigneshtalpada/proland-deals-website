const privacyPolicyData = [
    {
       title: "1. Introduction",
       content: "Welcome to Proland Deals. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the 'Site'). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.",
    },
    {
       title: "2. Information We Collect",
       content: [
          "Personal Data: We may collect personally identifiable information, such as your name, email address, and phone number, when you register on our Site or contact us.",
          "Usage Data: We may collect information about your interactions with our Site, such as your IP address, browser type, pages visited, and time spent on the Site.",
          "Cookies: We use cookies and similar tracking technologies to track activity on our Site and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
       ],
    },
    {
       title: "3. Use of Your Information",
       content: [
          "To Provide Services: We use the information we collect to deliver, maintain, and improve our services.",
          "Communication: We may use your information to communicate with you, including responding to your inquiries and sending you updates about our services.",
          "Marketing: With your consent, we may use your information to provide you with marketing communications and promotional offers."
       ],
    },
    {
       title: "4. Disclosure of Your Information",
       content: [
          "Service Providers: We may share your information with third-party service providers who perform services on our behalf.",
          "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.",
          "Business Transfers: In the event of a merger, acquisition, or asset sale, your information may be transferred. We will provide notice before your information is transferred and becomes subject to a different Privacy Policy."
       ],
    },
    {
       title: "5. Security of Your Information",
       content: "We use administrative, technical, and physical security measures to protect your personal information. However, no security measures are 100% secure and we cannot guarantee the security of your information.",
    },
    {
       title: "6. Your Privacy Rights",
       content: [
          "Access and Update: You have the right to access, update, and correct inaccuracies in your personal information in our custody and control, subject to certain exceptions prescribed by law.",
          "Opt-Out: You may opt out of receiving marketing communications from us by following the unsubscribe instructions included in each marketing email.",
          "Data Protection Rights: Depending on your location, you may have additional data protection rights, such as the right to request the deletion of your personal information or restrict its processing."
       ],
    },
    {
       title: "7. Third-Party Websites",
       content: "Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.",
    },
    {
       title: "8. Changes to This Privacy Policy",
       content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
    },
    {
       title: "9. Contact Us",
       content: "If you have any questions about this Privacy Policy, please contact us at [Insert Contact Information].",
    }
 ];

 const PrivacyPolicyArea = () => {
    return (
       <div className="terms-section mt-20 xl-mt-20 pt-20 xl-pt-20 mb-150 xl-mb-100">
          <div className="container">
             <div className="row gx-xl-5">
                <div className="col-lg-12">
                   {privacyPolicyData.map((policy, index) => (
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
 
 export default PrivacyPolicyArea;
