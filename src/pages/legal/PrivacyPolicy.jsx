import React from "react";
import PrivacyHero from "./components/PrivacyHero";

const PrivacyPolicy = () => {
  return (
    <div>
      <PrivacyHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 text-gray-800 space-y-6 leading-relaxed text-justify">
        <p>
          Your privacy is important. We have created this Privacy Policy so you can understand your rights as a TFXE
          website user. We may intermittently make changes to the policy. The changes will be included on this page. It
          is up to you to review this Privacy Policy regularly and stay informed about any changes made to it. We
          encourage you to visit this page often. By using the website you agree to the terms set forth in this Privacy
          Policy and terms of use. This is our entire and exclusive Privacy Policy and it supersedes any earlier
          versions.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Collection of your email address</h2>
        <p>
          Signing up for the website requires you to supply an email address, or other information needed to contact you
          online. Any email address supplied may later be accessed, updated, modified and deleted. Please note, we may
          keep a copy of any previous email addresses for our records.
        </p>
        <p>
          The email address you provide will be used to send you daily newsletters and market updates and will not be
          used for commercial purposes or sold to third-parties.
        </p>
        <p>
          This information is used to aid and improve your use of the website, for communication purposes, and to comply
          with any requirements of the law. We shall also use this information to respond to any questions you might
          have. Without your consent, your email address will not be sold or revealed to third parties, other than as
          specified in this Privacy Policy, unless we are legally obliged to do so (for example, if requested to do so
          by Court Order or for the purposes of prevention of fraud or any other crime).
        </p>

        <p>
          If necessary, we may disclose your information to protect our legal rights. For example, if the information
          relates to actual or threatened harmful actions, or we have good reason to believe that disclosing information
          is necessary in order to conform to the requirements of the law or comply with governmental orders, court
          orders, or legal process served on us; or to protect and defend our property or other rights, the users of the
          website or the public. This includes the exchange of information with other companies and organizations for
          fraud protection and credit risk protection. If the website ever files for bankruptcy, is part of a
          reorganization, sells its assets or merges with a separate company, we may sell information provided to us
          through the website to a third party or share your information with the third party or company we merge with.
        </p>

        <p>
          Links to third party websites may be present on this website. Even if the websites are accessed via links from
          our website, we are not responsible for their privacy practices or the content. Use of these third-party
          websites is done entirely at your own risk. It is recommended that you check the privacy and security policies
          of every website you visit. Clicking on a third party link essentially takes you to a third party’s website.
          We make no representation or warranty as to the effectiveness, quality, legitimacy or data protections of any
          third party website.
        </p>

        <p>
          If at any time you would like TFXE to delete your personal information from the database, send an email to{" "}
          <a href="mailto:support@tfxe.live" className="text-blue-600 underline">
            support@tfxe.live
          </a>{" "}
          and your details will be deleted within 72 hours.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
