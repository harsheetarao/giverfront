import * as React from 'react';
import { Modal } from '@/components/Modal';
import { cn } from '@/lib/utils';
import styles from './TermsOfService.module.css';

interface TermsOfServiceProps {
  isVisible: boolean;
  onClose: () => void;
  className?: string;
}

export default function TermsOfService({ 
  isVisible, 
  onClose,
  className 
}: TermsOfServiceProps) {
  if (!isVisible) return null;
  
  return (
    <Modal onClose={onClose} className={cn("p-6", className)}>
      <div className="terms-content">
        <h2>Gone Technologies Inc. Terms of Service</h2>
        
        <section>
          <p>Welcome to the Gone Technologies Inc. d/b/a "Gone" ("Gone," "We," or "Us") Terms of Service (the "Terms"). Please read these Terms carefully because they govern your use of our website gone.com and our gone mobile application, and any of our other services and products available at or through the website or mobile application (collectively "Services"). Please read the Terms carefully. If you have any questions, contact us at support@gone.com.</p>
          <p>At Gone we offer a unique way for our "users" to dispose of their household reusable goods with just a simple request for pick up. You reach out to us via phone, or text and send a picture of your reusable goods. We'll then send you a calendar invite to select a time for pick up. After the date, address, and time are confirmed, your goods will be hauled away as scheduled. You may cancel at anytime prior to pick up.</p>
          <p>After we pick up the items, Gone reserves the right to dispose of the items or resell the items at our discretion. No compensation is paid to the household. Instead, our value is the removal of unwanted items from your home, which is subject to your agreement and compliance with these Terms including, without limitation, waiver of the claims below.</p>
          <p>Not all items are available for pick up. Please review our policies for approved household items.</p>
        </section>

        <section>
          <h3>Agreement to Terms</h3>
          <p>By accessing or using any portion of our Services, you agree to comply with and be bound by these Terms. These Terms apply to you regardless of whether you are a "User" (meaning, you have created an account with us) or are a "Visitor" (meaning, you are using or viewing the Service but have not created an account). The term "You," "Your," or "User" refers to both Users and Visitors.</p>
          <p>The Service is for personal, non-commercial use. You agree that you are using the Service for personal use only and not are not using the Service for or on behalf of any third-party, or for any commercial purpose.</p>
        </section>

        <section>
          <h3>User Conduct</h3>
          <p>You Agree NOT to:</p>
          <ul>
            <li>use language or transmit content that may be considered offensive or profane to our team or users. This includes profanity and offensive images, or other media containing obscene, sexually explicit, or excessively violent content.</li>
            <li>harass or threaten other our team or users. Harassing behavior and language includes insults, ethnic or homophobic slurs, defamatory statements, invasive statements that may infringe on a user's privacy, or the transmission or sharing of any content that may cause our team or user to experience ridicule, threat, or discomfort.</li>
            <li>submit material that violates a third party's proprietary rights, including privacy and publicity rights, or that otherwise violates any applicable law;</li>
            <li>publish falsehoods or misrepresentations that could damage us, our users, or any third party;</li>
            <li>publish any private information of someone (like their address or phone number) without their permission;</li>
            <li>submit material that is unlawful, obscene, defamatory, libelous, threatening, pornographic, harassing, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offense, give rise to civil liability, violate any law, or is otherwise inappropriate;</li>
            <li>post advertisements;</li>
            <li>impersonate another person or represent yourself as affiliated with us, our staff, or other industry professionals;</li>
            <li>harvest user's names, addresses, or email addresses for any purpose.</li>
          </ul>
          <p>This list is an example and is not intended to be complete or exhaustive. We don't have an obligation to monitor your access to, or use of, the Services, but we reserve the right to do so for the purpose of operating the Services, to ensure your compliance with these Terms, or to comply with applicable law or the order or requirement of a court, administrative agency, or other governmental body. We reserve the right, at any time and without prior notice, to revoke your use our services, in our sole discretion, if we believe your actions are in violation of these Terms or otherwise harmful to our business.</p>
          <p>You can remove your content by specifically deleting it. However, in certain instances, some of your Content (such as images of items shared) may not be completely removed, or may not be removable (audible content), and copies of your Content may continue to exist on the Services. We are not responsible or liable for the removal or deletion of (or the failure to remove or delete) any of the Content.</p>
        </section>

        <section>
          <h3>Our Content</h3>
          <p>Subject to your compliance with these Terms, We grant you a limited, non-exclusive, non-transferable, non-sublicenseable license to access and view our content ("Our Content") solely in connection with your permitted use of the Services. For the purposes of these Terms, Our Content shall include all text, graphics, images, site and screen layouts, arrangements and themes, music, software, audio, video, works of authorship by us or our affiliates of any kind, and information or other materials that are posted or generated by us or our affiliates.</p>
          <p>You have the right to view and access Our Content. However, you may not copy, borrow, modify, or otherwise reproduce, and must immediately cease using, copying, borrowing, modifying, or otherwise reproducing any site and screen layouts, arrangements and themes provided through this Service. At no time is any Member permitted to: (i) transfer, sublicense, sell, lease, lend, rent, or otherwise distribute Our Content or the Services to a third party; (ii) decompile, reverse-engineer, disassemble, or create derivative works of the Services or any Our Content; or (iii) use the Services or Our Content in any unlawful manner, for any unlawful purpose, or in any manner inconsistent with these Terms.</p>
        </section>

        <section>
          <h3>Intellectual Property</h3>
          <p>The Services contain material that may be protected by United States and international copyright, trademark, and other proprietary information, including, but not limited to, audio, video, graphic, photographic and text information, and all Our Content. We, and any of our licensors, exclusively own all right, title and interest in, and to the Services and Our Content, including all associated intellectual property rights. You acknowledge that the Services and Our Content are protected by copyright, trademark, and other laws of the United States and foreign countries. You agree not to remove, alter, or obscure any copyright, trademark, service mark, or other proprietary rights or notices incorporated in or accompanying the Services and Our Content. Further, you may not modify, distribute, publish, transmit, publicly display, publicly perform, participate in the transfer or sale, create derivative works of, or in any way exploit any of the Our Content, in whole or in part. Any violation of these restrictions may result in intellectual property infringement that may subject you to civil and/or criminal penalties. You will be solely liable for any damage resulting from any infringement of copyrights, trademarks, proprietary rights or any other harm resulting from a submission of information protected by intellectual property rights in a third party, if such submission is made without express permission of the intellectual property rights holder.</p>
        </section>

        <section>
          <h3>DMCA/Copyright Policy</h3>
          <p>We respect copyright law and expect our users to do the same. It is our policy to terminate access in appropriate circumstances to users who repeatedly infringe the rights of copyright holders.</p>
          
          <p>The Digital Millennium Copyright Act of 1998 (the "DMCA") provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe in good faith that Content infringes your copyright, you (or your agent) may send us a notice requesting that the Content be removed or access to it blocked. Federal law requires that your notification include the following information:</p>
          
          <ul>
            <li>(i) a physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
            <li>(ii) identification of the copyrighted work claimed to have been infringed or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;</li>
            <li>(iii) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit us to locate the material;</li>
            <li>(iv) information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail;</li>
            <li>(v) a statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;</li>
            <li>(vi) a statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
          </ul>

          <p>The notification must be sent to:</p>
          <p>[COMPANY ADDRESS]</p>
          
          <p>We provide the above contact information for purposes of the DMCA only and reserve the right to respond only to correspondence that is relevant to this purpose.</p>
        </section>

        <section>
          <h3>Links and Advertisements of Third Party Websites, Apps, or Resources</h3>
          <p>The Services may contain links to or advertisements of third-party websites, applications or resources that are not affiliated with you, other users, or our Services. We are not responsible for the content, products or services on or available from those advertisements, websites, resources or links displayed on such sites. You acknowledge sole responsibility for and assume all risk arising from your use of any third-party websites or resources. The terms and privacy policies of these third party websites, applications, or resources govern your use of those services.</p>
        </section>

        <section>
          <h3>Indemnity</h3>
          <p>You agree to defend, indemnify and hold harmless us, or our officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs, debts, or expenses (including but not limited to attorneys' fees), to the extent allowed by applicable law, that arise from or are caused by:</p>
          <ul>
            <li>(i) your use of and access to the Services;</li>
            <li>(ii) your violation of these Terms;</li>
            <li>(iii) your violation of any third party right, including without limitation any copyright, property, moral or privacy right;</li>
            <li>(iv) any claim that your Content caused damage to any third party.</li>
          </ul>
          <p>This section shall survive these Terms and your use and termination of the Services.</p>
        </section>

        <section>
          <h3>Termination</h3>
          <p>We may terminate your access to and use of the Services at our sole discretion, at any time and without notice to you. Upon any termination, discontinuation or cancellation of Services, all provisions of these Terms which by their nature should survive will survive, including, without limitation, ownership provisions, indemnification, warranty disclaimers, limitations of liability, and dispute resolution provisions.</p>
        </section>

        <section>
          <h3>Warranty Disclaimers</h3>
          <p className="warranty-disclaimer">THE SERVICES AND CONTENT ARE PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. WE MAKE NO WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY CONTENT.</p>
        </section>

        <section>
          <h3>Accounts</h3>
          <p>You don't need to create an account to use our services. We engage directly with you at your request. However, when you engage with us you represent that you are eighteen (18) years or older and are not barred from using the Services under applicable law.</p>
          <p>You agree not to use the Services under the name of another person with the intent to impersonate that person. You must be a human to use the Services and an automated account is not allowed. "Robot" (or automatic) activity is not allowed. This policy also applies beyond Account creation to the general use of the Services.</p>
          <p>We reserve the right to suspend or terminate your access to our Services and/or your Account if any information provided during the registration process or thereafter proves to be inaccurate, false, or misleading. You are solely responsible for activities that occur under your Account.</p>
        </section>

        <section>
          <h3>Feedback</h3>
          <p>We welcome feedback, comments, and suggestions for improvements to the Services. You can submit feedback by emailing us at the contact email listed above. You grant to us a non-exclusive, worldwide, perpetual, irrevocable, fully-paid, royalty-free, sublicensable, and transferable license under any and all intellectual property rights that you own or control to use, copy, modify, create derivative works based upon, and otherwise exploit the feedback for any purpose.</p>
        </section>

        <section>
          <h3>Privacy Policy</h3>
          <p>Your privacy is important to us. Please review our Privacy Policy for information about the data we may collect and use. Our Privacy Policy is incorporated in these Terms, and is available at [WEBSITE LINK PRIVACY POLICY].</p>
        </section>

        <section>
          <h3>Your Content</h3>
          <p>For purposes of these Terms: "Content" means text, photos, graphics, images, audio, video, and information or other materials that are texted, emailed, shared, posted, generated, provided, or otherwise made available to us through the Services. "Goods" refers to the consumer household item that you are requesting to remove and/or that may appear in the Content shared.</p>
          <p>You are responsible for the Content and Goods that you share within the Services, including its legality, reliability, and appropriateness. We only take responsibility for the Goods once its loaded on to our truck.</p>
          <p>You represent and warrant that:</p>
          <ul>
            <li>(i) the Content and Goods are yours (e.g. its your stuff in your household and your own photo) or you have the right to share it and grant us the rights and license as provided in these Terms,</li>
            <li>(ii) the sharing of the Content on or through the Services does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person,</li>
            <li>(iii) you have the right to engage us to pick up the Goods</li>
            <li>(iv) you are the current owner of all right, title, and interest in the Goods and holds them free and clear of all liabilities, liens, encumbrances, pledges, restrictions on transfer or other charges ("Liens")</li>
            <li>(v) upon transfer of the Good to Gone, Gone will acquire good and marketable title to the goods, free and clear of any liens</li>
            <li>(vi) the Goods correspond with the description you provide us</li>
            <li>(vii) the Goods will be of satisfactory condition</li>
            <li>(viii) as consideration in full for removing the Goods from your household, you transfer ownership of the goods to Gone upon pick up.</li>
          </ul>
          <p>Gone shall not be liable for a breach of any warranty above unless User gives written notice of the defect to Gone at least 3 days prior to the date of pick up. If the goods do not conform with any of the warranties, Gone shall within 7 days of pick up have the option to return the goods to User at User's expense.</p>
          <p>We do not claim any ownership rights in any Content that you make available through the Services and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your own Content. However, you grant us a non-exclusive, non-transferable, non-sublicenseable, worldwide license to use any Content submitted by you in relation to the Services, including the promotion and advertisement of Services. We take ownership of the goods at the time of pick up. We reserve the right to store, sell, dispose, trade, or take any other action with the goods at our discretion.</p>
        </section>

        <section>
          <h3>WAIVER OF CLAIMS</h3>
          <p>As a User of our service you hereby acknowledge the risks associated with engaging with our Services to enter your home and remove your unwanted household items. You accept and assume full responsibility for any and all injuries, damages, or losses of any type, which may occur in the process of picking up and hauling your household items. You hereby fully and forever release and discharge us, our affiliates, our insurers, employees, officers, and directors from any and all claims, demands, damages, rights of action, or causes of action, whether present or in the future, whether known or unknown, anticipated, or unanticipated, resulting from or arising out of your use of our Services.</p>
        </section>

        <section>
          <h3>Changes to Terms or Services</h3>
          <p>We may modify the Terms and our Services at any time, in our sole discretion. If we do so, we will let you know by email or by posting notice on the website or via a notification in the App. It's important that you review the Terms whenever we modify them because continuing to use the Services after we have posted modified Terms on the Site indicates to us that you agree to be bound by the modified Terms. If you don't agree to be bound by the modified Terms, then please discontinue use of the Services immediately. Because our Services are evolving over time we may change or discontinue all or any part of the Services at any time, and without notice to you, at our sole discretion.</p>
        </section>

        <section>
          <h3>Limitation of Liability</h3>
          <p className="liability-disclaimer">
            NEITHER WE NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES OR CONTENT WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, MOBILE DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
          </p>
          <p className="liability-disclaimer">
            IN NO EVENT WILL OUR TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT EXCEED ONE HUNDRED DOLLARS ($100).
          </p>
        </section>

        <section>
          <h3>Dispute Resolution</h3>
          <p>We prefer to resolve things amicably when possible; therefore, you agree to the following dispute resolution policy in connection with any potential claims or disputes arising from your use of the Application. Start by notifying us of your dispute by sending a notice to the contact email address listed above.</p>
          
          <ol type="a">
            <li><strong>Informal Negotiations:</strong> Parties to a dispute concerning the Terms, the Privacy Policy, or the use of the Services will attempt to informally negotiate a potential settlement or resolution to the dispute;</li>
            
            <li><strong>Arbitration:</strong> In the event that informal negotiations are unsuccessful, the parties agree to follow the arbitration procedures set forth by the American Arbitration Association (AAA) to resolve the dispute.</li>
            
            <li><strong>Binding Arbitration:</strong> If for any reason arbitration is unsuccessful or unavailable to the parties, parties agree to submit to binding arbitration in the jurisdiction of the State of Washington. Each of us is responsible for paying our own filing, administrative and arbitrator fees. Judgment on the arbitration award may be entered in any court having jurisdiction thereof.</li>
          </ol>
        </section>

        <section>
          <h3>Entire Agreement</h3>
          <p>These Terms constitute the entire and exclusive understanding and agreement between us and you. These Terms supersede and replace any and all prior oral or written understandings or agreements between us. If for any reason a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect.</p>
          
          <p>You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. Any attempt by you to assign or transfer these Terms, without such consent, will be null and of no effect.</p>
          
          <p>Any notices or other communications provided by us under these Terms, including those regarding modifications to these Terms, will be given by us (i) via email; or (ii) by posting to the Services. For notices made by email, the date of receipt will be deemed the date on which such notice is transmitted.</p>
          
          <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of us. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.</p>
        </section>

        <section>
          <h3>Questions & Contact Information</h3>
          <p>If you have any questions regarding these Terms, please contact us at support@gone.com</p>
        </section>
      </div>
    </Modal>
  );
}
