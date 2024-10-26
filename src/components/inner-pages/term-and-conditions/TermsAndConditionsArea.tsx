
const termsData = [
   {
      title: "1. Introduction",
      content: "Welcome to Proland Deals website (the 'Site'). By accessing or using our Site, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Site.",
   },
   {
      title: "2. Use of the Site",
      content: [
         "Eligibility: You must be at least 18 years old to use our Site and agree to provide accurate information.",
         "Permitted Use: You agree to use the Site for lawful purposes only and not to engage in any activities that may harm the Site or other users.",
         "Account Registration: You may be required to register an account to access certain features. You are responsible for keeping your account credentials secure."
      ],
   },
   {
      title: "3. Property Listings",
      content: [
         "Listing Accuracy: We strive to ensure all property information is accurate, but we do not guarantee its accuracy. Properties are subject to availability and may change without notice.",
         "Third-Party Listings: Some listings may be provided by third-party agents or brokers. We are not liable for the accuracy of third-party listings.",
         "Site Information: Information provided on the Site is for informational purposes only and should not be interpreted as professional or legal advice."
      ],
   },
   {
      title: "4. User Responsibilities",
      content: [
         "Content Submission: If you submit any content, such as property reviews, comments, or photos, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and publish such content on the Site.",
         "Prohibited Conduct: You agree not to post or transmit content that is illegal, offensive, harmful, or infringes on the rights of others."
      ],
   },
   {
      title: "5. Booking and Transactions",
      content: [
         "Payments: Some services, like booking viewings, may require payments. By making a payment, you agree to the transaction terms provided at checkout.",
         "Refund Policy: Any refunds or cancellations are subject to our refund policy, detailed in our Refund Policy page."
      ],
   },
   {
      title: "6. Limitation of Liability",
      content: [
         "Disclaimer of Warranties: The Site is provided on an 'as-is' and 'as-available' basis. We do not guarantee the Site will be error-free or uninterrupted.",
         "Liability Limitations: We are not liable for any direct, indirect, or consequential damages arising from your use of the Site or reliance on any information on it."
      ],
   },
   {
      title: "7. Privacy Policy",
      content: "Your privacy is important to us. Please review our Privacy Policy to understand our practices.",
   },
   {
      title: "8. Intellectual Property",
      content: [
         "Site Content: All content on the Site, including text, images, graphics, and logos, is the property of Proland Deals and is protected by intellectual property laws.",
         "Trademarks: Any trademarks, service marks, or logos displayed are the property of their respective owners."
      ],
   },
   {
      title: "9. Third-Party Links",
      content: "Our Site may contain links to third-party websites. We are not responsible for the content or policies of third-party sites.",
   },
   {
      title: "10. Changes to Terms",
      content: "We may update these Terms and Conditions at any time. Your continued use of the Site following any changes signifies your acceptance of the updated terms.",
   },
   {
      title: "11. Contact Us",
      content: "If you have any questions about these Terms and Conditions, please contact us at [Insert Contact Information].",
   }
];

const TermsAndConditionsArea = () => {
   return (
      <div className="terms-section mt-20 xl-mt-20 pt-20 xl-pt-20 mb-150 xl-mb-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-12">
                  {termsData.map((term, index) => (
                     <article key={index} className="blog-post-meta mb-4">
                        <div className="post-data pt-50 md-pt-30">
                           <h5>{term.title}</h5>
                           {Array.isArray(term.content) ? (
                              term.content.map((text, i) => <p key={i}>{text}</p>)
                           ) : (
                              <p>{term.content}</p>
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

export default TermsAndConditionsArea;
