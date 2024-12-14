import * as React from 'react';
import { Modal } from '@/components/Modal';
import { cn } from '@/lib/utils';

interface PrivacyProps {
  isVisible: boolean;
  onClose: () => void;
  className?: string;
}

export const Privacy = ({ 
  isVisible, 
  onClose,
  className 
}: PrivacyProps) => {
  if (!isVisible) return null;

  return (
    <Modal onClose={onClose} className={cn("p-6", className)}>
      <div className="privacy-content">
        <h2>Privacy Policy</h2>

        <section>
          <p>Your privacy is important to us. At Gone Technologies Inc. d/b/ Its Gone Now ("Gone", "we", "us", or "our"), we have a few fundamental principles:</p>
          <ol>
            <li>We don't and won't ask you for personally identifying information unless we need it and you have the opportunity to review your options. To make this Privacy Policy easier to read, www.itsgonenow.com and our associated products and services are collectively referenced as "Services" throughout this policy.</li>
            <li>We don't share your personally identifying information, with anyone, except as needed, to provide service support, to comply with the law, or to protect our rights.</li>
            <li>This service does not require you to enter any information to view the website or the products and services. You do have the option to fill in the information to make a request to receive more information or a demo. This information is only used to connect with you about working with Gone. We do not share this information with anyone or use it for any other purposes. The limited information collected is governed by this policy.</li>
            <li>If you are a customer of Gone, this Privacy Policy governs the limited personal information that you share in order to set up an account and access our tools, products, dashboard, and other services in accordance with our Terms of Service.</li>
          </ol>
          
          <p>Please note, that this Privacy Policy does not apply to the privacy practices of third parties whose links may appear on or through the Services. We are not responsible for the content or privacy practices of third parties or other users. We recommend that you exercise caution before you voluntarily disclose personally identifiable information to other users, on publicly accessible or displayable parts of the Service, or through third-party links on third-party websites or platforms.</p>
        </section>

        <section>
          <h3>I. What is Personal Information and What types of Personal Information do we collect?</h3>
          <ol>
            <li>For purposes of this policy, "personal information" is information about an individual that can be used to reasonably identify that individual.</li>
            <li>We only collect limited personal information to respond to your queries, deliver our Services, provide support or as otherwise described in this policy. We limit our collection of data to first name, last name, address, phone number and email address in addition to the consumer data listed below.</li>
          </ol>
        </section>

        <section>
          <h3>II. INFORMATION COLLECTION AND USE</h3>
          
          <h4>1. Business Operation</h4>
          <p>In general, we collect, use and disclose information for purposes connected with our business operations. This includes providing our products and services, enabling proper operation and functionality, improving our products and services, verifying addresses, coordinating vendors, managing support concerns, marketing purposes, and other related business purposes. You are not required to provide any personal information however, you will not receive the full value of our services without this information.</p>
          
          <h4>2. Email Addresses</h4>
          <p>We do not and will not send spam, sell or rent your email address or any social media login account information to third parties. We do utilize third party marketing tools to support our marketing activities as described below. With your permission, we do coordinate with third party partners who are licensed and bonded to provide pick up services at your address. We do not disclose, sell, share, trade or give away a user's personal information to any third parties. We may email users directly to connect, updates, or other reasons related to your interest in our product or services.</p>
          
          <h4>3. Marketing</h4>
          <p>We may contact you with marketing and promotional information (in accordance with your marketing preferences) about products and services that we offer and to send you information regarding us. We use _________ for this purpose and you can review their privacy policy here. See below "Objections and Restrictions" for information about how you can opt-out of receiving marketing communications from us at any time.</p>
          
          <h4>4. Logging Statistics</h4>
          <p>Like most website operators, our servers automatically collect certain types of non-personally identifying, technical information, such as the browser type, language preference, referring site, and the date and time of each visitor request. This includes information such as:</p>
          <ul>
            <li>What website you came from to get here;</li>
            <li>What portions of our website you access;</li>
            <li>How long you stay for; and</li>
            <li>What kind of device you're using</li>
          </ul>
          <p>We use this information to better understand how our visitors use our website and to maintain Services.</p>
          
          <h4>5. Location Information & IP Addresses</h4>
          <p>We collect very limited personal data. If you fill out a form with your name and email address, we do link the IP address and device information to you. Additionally, we collect IP address and convert it to location for (1) security monitoring (2) supporting some features, such as IP whitelisting, country level location whitelisting, and (3) Delivering location based help and website details.</p>
          
          <h4>6. Locale Preferences and Device Information</h4>
          <p>When you use our services or products, we may automatically collect certain information from your device, its software, and your activity using our services or products. This may include information you search for on our website, locale preferences, identification numbers associated with your devices, your mobile carrier, date and time stamps associated with transactions, metadata, your Internet Service Provider, files viewed on our site, operating system, and clickstream data.</p>

          <h4>7. Data Aggregation</h4>
          <p>In addition to the other uses described in this policy, you agree that we may extract and use information from the information you disclose for the purposes of aggregating data in a non-identifiable method. This aggregated data may be used internally to improve services or without limitation, to develop, analyze, combine, or publish the aggregated data for commercial purposes.</p>

          <h4>8. Cookies</h4>
          <p>Your use of certain of the services may result in the assignment and storage of session cookies by Gone and analytics tools to recognize your access privileges and generally track user preferences. A cookie is a text file that is placed on the hard disk of your computer or mobile device by a server. Session cookies expire when you end your session and close your browser interface. Cookies cannot be used to run programs or deliver viruses to your computer or mobile device. Cookies are uniquely assigned to you and can only be read by a server in the domain that issued the cookie to you. Visitors who do not wish to have cookies placed on their computers or mobile devices should deny Cookies by configuring their respective browsers to do so. If Cookies are denied, certain features of our services may not function properly.</p>

          <h4>9. Social Media Widgets</h4>
          <p>Our website includes social media features, such as the Facebook like button and widgets, such as the "Share This" and button for X. These features may collect your IP address and the page you are visiting on our site, and they may set a cookie to enable the feature to function properly. Social media features and widgets are either hosted by a third party or hosted directly on our site. Your interactions with these features are governed by the privacy policy of the company providing it.</p>

          <h4>10. How We Share Your Information</h4>
          <p>Gone takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally identifying information.</p>
          <p>Gone discloses potential personally identifying information only on an as needed (or required) basis as follows:</p>
          <ul>
            <li>To our personnel that: (i) need to know that information in order to process it on our behalf or to provide the services; and (ii) that have expressly agreed not to disclose it to others. Note* Some of those employees, and contractors may be located outside of your home country; by using the services you consent to the transfer of such information to them.</li>
            <li>As required by law such to comply with a subpoena or similar legal process. To the extent we are legally permitted to do so, we will take commercially reasonable steps to notify you if we are required to provide your personal information to third parties as part of a legal process.</li>
            <li>When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a written government request.</li>
            <li>In the event of a merger, acquisition, or any form of sale of some or all of Gone's assets, we will ensure that the acquiring organization agrees to protect personal information in accordance with the commitments we have made in this Privacy Notice, and that the acquiring organization will provide notice before personal information, customer information, or business information becomes subject to a different privacy notice.</li>
            <li>To any other third party with your prior consent to do so. We do not generally sell your personal information to third parties.</li>
          </ul>
        </section>

        <section>
          <h3>III. ACCESSING AND UPDATING YOUR PERSONAL INFORMATION; SECURITY</h3>
          
          <h4>1. Communications</h4>
          <p>If you have provided an email with us for access and use of our services, we may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with Gone and our services. We primarily use our various product blogs and support documentation to communicate this type of information, so we expect to keep this type of email to a minimum.</p>
          
          <h4>2. Third-Party Services</h4>
          <p>We use various third-party services to create the best experience for users, to deliver on certain logistics services, and for improving existing products and services. Some third party services use cookies or similar technologies to analyze trends, administer the website, track users' movements around the website, and to gather demographic information about our user base as a whole. You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website or service. We use Amazon Web Services to store information and host services. We use various third-party services that collect and analyze information about your use of our site. Among others, we use Google Analytics for website use and traffic analysis. We also use various services to ensure user success and improved relationship management.</p>
          
          <h4>3. Security, Data Storage & Retention</h4>
          <p>To prevent unauthorized access, safeguard data accuracy, and maintain the appropriate use of information, we have put in place appropriate physical, technical, and administrative procedures to protect the personal information data you submit. We make every effort to ensure the integrity and security of our network and systems. However, since the Internet is not 100% secure and as new technology evolves and emerges, we cannot guarantee that our security measures will prevent third-party interferences from illegally obtaining or tampering with your personal information.</p>
          <p>We encourage you to help us by also taking precautions to protect your personal data when you use the services. Change your account password often, using a combination of letters, numbers, and characters, and make sure you use a secure connection. We also recommend enabling two-factor authentication for signing into your account.</p>
          <p>Gone will retain your personal information for as long as needed for the purposes described above and/or as required by law. A user may request access to certain data about themselves by emailing privacy@Gone.com</p>
        </section>

        <section>
          <h3>IV. YOUR RIGHTS UNDER THE CCPA (EXTENDED TO ALL USERS)</h3>
          <p>The California Consumer Privacy Act (CCPA) and some other state laws provide you with fundamental rights. Due to our commitment to privacy, we have extended those data subject rights to persons in all jurisdictions.</p>
          
          <ol type="A">
            <li>Right to be forgotten ("Right to Erasure") This right provides you with the ability to ask for the deletion of your data. This will generally apply to situations where a customer relationship has ended. It is important to note that this is not an absolute right and depends on our retention schedule and retention period in line with other applicable laws.</li>
            <li>Right to know how we are processing your information ("Right to Information") This right provides that you may ask us for information about what personal data is being processed and the rationale for such processing. For example, you may ask for the list of processors with whom we share your personal data.</li>
            <li>Right to view the information we have collected about you ("Right to Access"). This right provides you with the ability to get access to your personal data that is being processed. This request provides the you with the right to see or view your own personal data, as well as to request copies of the personal data.</li>
            <li>Right to rectification. This right provides you with the ability to ask for modifications to your personal data in case you believe that this personal data is not up to date or not accurate.</li>
            <li>Right to withdraw consent. This right provides you with the ability to withdraw a previously given consent for processing of your personal data for a purpose.</li>
            <li>Right to object to processing your information ("Right to object"). This right allows you to object to certain types of data processing. These are:
              <ul>
                <li>Direct marketing</li>
                <li>The processing of personal data for statistical purposes related to historical or scientific research</li>
                <li>The processing of data for tasks in the public interest</li>
                <li>The exercising of official authority invested in you</li>
                <li>Objections to data processing in yours or a third party's legitimate interest</li>
                <li>Objections to data processing based on your own beliefs and situations</li>
              </ul>
            </li>
            <li>Right to data portability. This right provides you with the ability to ask for transfer of your personal data. As part of such request, you may ask for your personal data to be provided back to you in a machine-readable electronic format or, if technically feasible, transferred to another service provider.</li>
            <li>Right to Limit Use and Disclosure of Sensitive Personal Information. You have the right, at any time, to direct us (as a business that collects sensitive personal information about you) to limit our use of your sensitive personal information to that use which is necessary to perform the services expected. If you would like to exercise any of the above rights, please contact our support team at support@Gone.com</li>
          </ol>
        </section>

        <section>
          <h3>V. ADDITIONAL TERMS; CHANGES AND CONTACT</h3>
          
          <h4>1. Privacy Of Minors</h4>
          <p>We do not promote or offer the Services for use by anyone under the age of 18 ("minors"). Gone does not knowingly solicit or collect personal information from minors, and we will not knowingly link to any third-party website or platform, or host any customer sites that solicit or collect personal information from minors. If you believe that a minor has disclosed personal information to us or that we have linked to such a third-party or user website or platform, please contact us at privacy@Gone.com</p>
          
          <h4>2. Additional Information for International Users</h4>
          <p>If you are visiting this website and/or accessing the Services from outside the United States, please be aware that you are sending information (including Personal Information) to the United States where Gone servers are located. This information may be transferred within the United States or back out of the United States to other countries outside of your country of residence, depending on the type of information and how its stored by us. These countries (including the United States) may not necessarily have data protection laws as comprehensive or protective as those in your country of residence, however, our collection, storage and use of your personal information will at all times be governed by this Privacy Policy. Notwithstanding the foregoing, this service is not available to international users.</p>
          
          <h4>3. Business Transfers</h4>
          <p>If the ownership of Gone substantially changes, such that all of its assets were acquired, or merged into another entity, or in the unlikely event that Gone enters bankruptcy, you understand that any stored personally identifying, and non-personally identifying information and data will likely be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur and that any acquirer or merging entity of Gone may continue to use your personal information as set forth in this policy.</p>
          
          <h4>4. Privacy Policy Changes</h4>
          <p>We may update this Privacy Policy to reflect changes to our information practices. If we make any change in how we use your personal data we will notify you by email (specified upon registration), or we will notify you by means of a notice on this page prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.</p>
          
          <h4>5. Contact Gone</h4>
          <p>If you have any questions or suggestions regarding this Privacy Policy, please contact Gone via email at support@Gonedigital.com.</p>
          
          <h4>6. Contact appropriate authority</h4>
          <p>Should you wish to report a complaint or if you feel that we have not addressed your concern in a satisfactory manner, you have the right to contact a regulatory body or data protection authority in relation to your complaint</p>
        </section>
      </div>
    </Modal>
  );
};
