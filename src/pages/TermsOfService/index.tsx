import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative flex pt-40 bg-black md:pt-40">
        <div className="items-center justify-center px-[10%] lg:px-[20%]">
          <div>
            <Link
              className="text-[#B882FF] flex md:text-[22px] font-Outfit font-medium md:leading-[34px]"
              to="/"
            >
              <img src="/assets/home/ArrowLeft.svg" className="mr-2" alt="back" />
              Back to website
            </Link>
          </div>
          <h1 className="md:text-[48px] font-bold font-Outfit py-4">
            Terms of Service
          </h1>
          <div>
            <p className="md:text-[22px] mb-8 md:eading-[34px] font-normal font-Outfit">
              Terms of Service eTown PTE. LTD. <br /> Last Updated: Aug 1st,
              2023
            </p>
            <div className="mb-8">
              <p className="md:text-[22px] nd:leading-[34px] font-normal font-Outfit">
                <b>Etown PTD. LTD..</b> ("TowneSquare", the "Company", "we", "us" or "our") is a blockchain development
                company, focused on utilizing decentralized technologies such as the Solana and the Aptos blockchain.
                TowneSquare hosts a top level domain website, https://townesquare.xyz/, that provides information
                regarding TowneSquare and its service offerings, as well as sub-domains for TowneSquare’s product
                offerings (collectively, the "Site"), which includes text, images, audio, code and other materials and third
                party information.
                <br />
                <br />
                TowneSquare makes available to certain users certain software, including TowneSquare's unhosted
                social network application and browser extension (the "App"). The App enables users to (i) connect to
                their non-custodial wallet on their own devices, tokens, cryptocurrencies and other crypto or
                blockchain-based digital assets (collectively, "Digital Assets"); (ii) link to decentralized applications,
                including, without limitation, decentralized exchanges (collectively "Dapp(s)"); (iii) from the App user
                interface, swap assets on a peer-to-peer basis via third-party Dapps ("Swapper"); (iv) view addresses
                and information that are part of digital asset networks and broadcast transactions; and (v) additional
                functionality as may be added to the App from time to time (collectively the "Functionality").
                These Terms of Use (these "Terms" or this "Agreement") (i) contain the terms and conditions that govern
                your access to and use of the Site and/or the App and Functionality and (ii) constitute a legally binding
                agreement between us and you and/or the entity you represent ("you", "your" or "user").

              </p>
            </div>
            <div className="mb-8">
              <h1 className="md:text-[48px] font-bold font-Outfit py-4">
                {" "}
                Agreement to Terms; Privacy Policy{" "}
              </h1>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Please read these Terms carefully before using the Site and/or the App or Functionality. By using or
                accessing the Site and/or the App, Functionality and/or Content (defined below) in any manner, or
                clicking a button or checkbox to accept or agree to these Terms where that option is made available you,
                (i) accept and agree to these Terms and (ii) consent to the collection, use, disclosure and other handling
                of information as described in our Privacy Policy, available at https://www.townesquare.xyz/PrivacyPolicy
                (the "Privacy Policy"). The Privacy Policy is incorporated herein by this reference in its entirety, and all
                references herein to the "Terms of Use", the "Terms" or this "Agreement", include a reference to the
                Privacy Policy.
              </p>
            </div>
            <div className="mb-8">
              <h1 className="md:text-[48px] font-bold font-Outfit py-4">
                Changes to Terms of Services; Third-Party Services
              </h1>{" "}
              <p className="md:text-[22px] md:leading-[34px] font-normal mb-8 font-Outfit">
                We may modify the Terms at any time at our sole discretion and without notice. If we do so, we'll notify you either by posting the modified Terms on the Site and/or the App, by providing you a notice through the App, or through other methods of communication. which we deem reasonable. It's important that you review the Terms whenever we modify them, because, if you continue to use the Site and/or the App or Functionality after we have modified the Terms, you are agreeing to be legally bound, and to abide, by the modified Terms.
                <br />
                <br />
                If you don't agree to be bound by the modified Terms, then you may not use the Site and/or the App or the Functionality. Because the Functionality is evolving over time, we may change or discontinue all or any part of the Site and/or the App and Functionality (or any part of either or both) at any time and without notice, in our sole and absolute discretion. If you don't agree to be bound by the modified Terms, then you must not use the Site and/or the App or Functionality.
                <br />
                <br />
                When you use our App and/or Functionality, you may also be using the functionality of one or more third parties. For example, the Swapper relies on exchanges operated by third persons. Your use of those and other third-party software ("Third-Party Functionality") will be subject to the privacy policies, terms of use and similar policies and terms, and fees of those third parties.
              </p>
            </div>
            <div className="mb-8">
              <h1 className="md:text-[48px] font-bold font-Outfit py-4">
                {" "}
                Who May Use the Services{" "}
              </h1>
              <h3 className="md:text-[36px] font-bold font-Outfit py-4">Eligibility</h3>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                You may use the Site and/or the App and Functionality if you are of the age of majority in your jurisdiction of residence (if this is higher) and are not barred from using the Site and/or the App and Functionality under applicable law. By using the Site and/or the App and/or Functionality and agreeing to these Terms, you represent and warrant that:
              </p>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit ml-10">
                You are of lawful age, and are lawfully able, to enter into contracts. If you are entering into this Agreement for an entity, such as the company you work for, you represent and warrant that you have legal authority to bind that entity to these Terms.
                Neither you nor any person that owns or controls you is subject to sanctions or otherwise designated on any list of prohibited or restricted parties, including but not limited to the lists maintained by the United Nations Security Council, the BVI government, the United Kingdom government, the U.S. Government (e.g., the Specially Designated Nationals List and Foreign Sanctions Evaders List of the U.S. Department of Treasury and the Entity List of the U.S. Department of Commerce), the European Union or its Member States, or other applicable government authority.
              </p>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Registration and Your Information; Suspension/Termination of Functionality; Security
                To use the Site and/or the App and avail of the Functionality, you may be asked to have or to create an account ("Account"). To the extent you create an account, you agree that you won't disclose your Account credentials to or allow your Account to be used by anyone and you'll notify us immediately of any unauthorized use of your Account. You're responsible for all activities that occur under your Account, or are otherwise referable to your Account credentials, whether or not you know about them, and you are solely responsible for your conduct, and the tasks and activities you undertake, on or utilizing the Site and/or the App or Functionality. We reserve the right to suspend or terminate your Account if you provide inaccurate, untrue, or incomplete information, or if you fail to comply with the Account registration requirements or these Terms (as each may be modified from time to time). Your access to and use of the Site and/or the App or Functionality may be suspended at any time, for any reason, in our sole and absolute discretion, without incurring liability of any kind to you as a result of such suspension or termination. You acknowledge and understand that, in certain circumstances, such as if you lose or forget your password for your Wallet, you will need to use a recovery phrase to access any cryptocurrency stored in your wallet (the "Recovery Phrase"). You are solely responsible for the retention and security of your Recovery Phrase. Your Recovery Phrase is the only way to restore access to the cryptocurrency stored in your Wallet if you lose access to your Wallet. Anyone who knows your Recovery Phrase can access, transfer or spend your cryptocurrency. If you lose your Recovery Phrase, you may not be able to access, transfer or spend your cryptocurrency.
                You acknowledge and agree that TowneSquare does not store and is not responsible in any way for the security of your Wallet and you agree to hold TowneSquare, its affiliates, representatives, agents and personnel harmless and that no such party shall be liable in any way in the event you lose your Wallet and cannot access, transfer or spend your cryptocurrency. You bear sole responsibility for any loss of your cryptocurrency due to failure to retain and/or secure your Recovery Phrase.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[48px] font-bold font-Outfit py-4">
                {" "}
                Content Ownership, Responsibility and Removal{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                For purposes of these Terms: (i) "Content" means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided or otherwise made available through the Site or Functionality; and (ii) "User Content" means any Content that users or Account holders (including you) upload, submit, store, send, post or otherwise make available on the App or through our Site. Content includes without limitation User Content.
              </p>
              <br /><br />
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                We do not claim any ownership rights in any User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your User Content.
              </p>
              <br /><br />
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Subject to the foregoing, TowneSquare and its licensors exclusively own all right, title and interest in and to the Site, the Functionality and Content, including all associated intellectual property rights. You acknowledge that the Site, Functionality and Content are protected by copyright, trademark, and other laws of the United States and foreign countries. You agree not to remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Functionality or Content.
              </p>
              <br /><br />
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Rights in User Content Granted by You
              </p>
              <br /><br />
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                You grant us a worldwide, non-exclusive, royalty-free, fully paid-up, perpetual, irrevocable, sublicensable, and transferable license to use, copy, distribute, create derivative works of, publicly display, and publicly perform your User Content, subject to the Privacy Policy.
              </p>
              <br /><br />
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                You acknowledge that, in certain instances, where you have removed your User Content by specifically deleting it, some of your User Content (such as posts or comments you make) may not be completely removed and copies of your User Content may continue to exist on the Functionality. We are not responsible or liable for the removal or deletion of (or the failure to remove or delete) any of your User Content.
              </p>
              <br /><br />
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                Rights in App, Site and Functionality Granted by TowneSquare
                The App, Site and Functionality (or access thereto) are proprietary to TowneSquare and its licensors and must not be used other than strictly in accordance with these Terms. TowneSquare grants to you a limited, non-exclusive, non-transferable, non-sublicensable, fully-revocable right to use the App and Site for the purposes of accessing and using the Functionality strictly in accordance with these Terms.
              </p>
              <br /><br />
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                You agree not to use the Site or Functionality in any manner or for any purpose other than as expressly permitted by this Agreement. Except as expressly authorized, you will not, and will not attempt to (i) modify, distribute, alter, tamper with, repair, or otherwise create derivative works of any Content included in the Functionality (except to the extent Content included in the Functionality is provided to you under a separate license that expressly permits the creation of derivative works), (ii) reverse engineer, disassemble, or decompile the App or Site or apply any other process or procedure to derive the source code of any software included in the App or Site , (iii) access or use the Functionality in a way intended to avoid incurring fees or exceeding usage limits or quotas, (iv) use scraping techniques to mine or otherwise scrape data, or (v) resell or sublicense the Functionality, or use the Functionality to provide software as a service or any cloud-based, time sharing, service bureau or other services. You will not use Our Marks unless you obtain our prior written consent. You will not misrepresent or embellish the relationship between us and you (including by expressing or implying that we sponsor, endorse, or contribute to you or your business endeavors). You will not imply any relationship or affiliation between us and you. For the purposes of these terms, "Our Marks" means any trademarks, service marks, service or trade names, logos, trade dress and other designations of source, origin, sponsorship, certification or endorsement of TowneSquare Technologies Inc. or its affiliates or their respective licensors.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="md:text-[36px] font-bold font-Outfit py-4">Fees</h3>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                You may be charged fees for access to some or part of the Functionality you use, including fees charged on token swaps that you execute on third-party exchanges by accessing such exchanges via the Swapper. Those fees may change at any time without notice. The amount of fees applicable to the Functionality will be made visible to you at the time that you access the Functionality. Rates that appear in the TowneSquare application are calculated with fees applied.
                <br /><br />
                You may incur charges from third parties for use of Third-Party functionality. For example, you may be charged fees via the Dapps (including, without limitation, decentralized exchanges) that you may access via the App, including via the Swapper. Under no circumstances shall TowneSquare incur any liability, of any kind, to you arising from or relating to fees charged to you by such Third Parties or for Third-Party Functionality linked to or accessed through the Site or the Functionality.
                <br /><br />
                Although the Site and the App endeavours to provide an accurate estimate of applicable fees, any such information is an advance estimate of fees, which may vary from the fees actually paid to use the Functionality and interact with the Aptos and the Solana blockchain or any other network with which the Functionality are compatible.
                <br /><br />
                In connection with the Swapper, you understand and agree that swap rates and prices are estimates only, and that they may change at any time. Accordingly, the prices or swap rates provided via the Functionality, including on the Swapper interface, are estimates only and may be inaccurate. TowneSquare may not be held liable for, and you hereby forever release TowneSquare from, any losses or other liabilities arising from an inaccurate estimate of fees provided in connection with any use of any of the Functionality.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="md:text-[36px] font-bold font-Outfit py-4">Acceptable Use and Enforcement Rights</h3>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                As a condition to using the Site and/or Functionality, you agree not to use the Site or Functionality in ways that:
              </p>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit ml-6">
                - Violate, misappropriate, or infringe the rights of TowneSquare, its licensors, our users, or others, including privacy, publicity, intellectual property, or other rights;<br />
                - Are illegal, obscene, defamatory, threatening, intimidating, harassing, hateful or racially or ethnically offensive, or that instigate or encourage conduct that would be illegal or otherwise inappropriate, including promoting violent crimes;<br />
                - Involve falsehoods, misrepresentations, or misleading statements, including impersonating someone;<br />
                - Involve sending illegal or impermissible communications such as bulk messaging, auto- messaging, auto-dialing, and the like;<br />
                - Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure implemented by us or any of our service providers or any other third party to protect the Functionality or Content;<br />
                - Disguise your location through IP proxying or other methods;<br />
                - Interfere with, or attempt to interfere with, the access to the Functionality of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the Functionality;<br />
                - Circumvent any content-filtering techniques, security measures or access controls that TowneSquare employs on the Site, in the App, or the Functionality in any manner;<br />
                - Could interfere with, disrupt, negatively affect or inhibit other users from enjoying the Functionality, or that could damage, disable, overburden, or impair the functioning of the Site or Functionality;<br />
                - Violate any applicable law or regulation, including, without limitation any applicable anti- money laundering, anti-proliferation and anti-terrorism financing laws and sanctions programs, including, without limitation, the U.S. Bank Secrecy Act and those enforced by the U.S. Department of Treasury's Office of Foreign Assets Controls and any other Export Control Laws and those of the British Virgin Islands and of the Republic of Singapore;<br />
                - Encourage or enable any other individual to do any of the foregoing.
              </p>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                By using the Site or Functionality, you further represent, warrant and covenant that:
              </p>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit ml-6">
                - Any Digital Assets you transfer using the Site and/or the App via the Functionality have been legally obtained by, and belong to, you;<br />
                - You will not provide any false, inaccurate or misleading information while using the Site, the App or Functionality, or engage in any activity that operates to defraud the Company, other users of the Functionality, or any other person or entity;<br />
                - You will not use the Functionality to transmit or exchange Digital Assets that are the direct or indirect proceeds of any criminal or fraudulent activity, including, without limitation, terrorism or tax evasion;<br />
                - Any Digital Assets you use in connection with the Functionality are either owned by you or you are validly authorized to carry out actions using such assets;<br />
                - You will pay all fees necessary for interacting with the Solana blockchain, or any other network with which the Functionality are compatible, including "gas" costs, as well as all fees charged by us for your use of the Site and Functionality.<br />
              </p>
              <p className="md:text-[22px] lg:leading-[34px] font-normal font-Outfit">
                Although we have no obligation to monitor any User Content, we have absolute discretion to remove User Content at any time and for any reason without notice. You understand that by using the Site and Functionality, you may be exposed to User Content that is offensive, indecent, or objectionable. We take no responsibility and assume no liability for any User Content, including any loss or damage to any of your User Content.
                <br /><br />
                You agree to comply with all applicable U.S. and non-U.S. export control and trade sanctions laws ("Export Laws"). Without limiting the foregoing, you may not use the Site or download the App or use the Functionality if (i) you are in, under the control of, or a national or resident of Cuba, Iran, North Korea, Sudan, or Syria or any other country subject to United States embargo, UN Security Council Resolutions, HM Treasury's financial or other sanctions regime, or if you are on the U.S. Treasury Department's Specially Designated Nationals List or the U.S. Commerce Department's Denied Persons List, Unverified List, Entity List HM Treasury's financial or other sanctions regime; or (ii) you intend to supply any Functionality to Cuba, Iran, North Korea, Sudan or Syria or any other country subject to United States embargo or HM Treasury's financial or other sanctions regime (or a national or resident of one of these countries), or to a person on the Specially Designated Nationals List, Denied Persons List, Unverified List, Entity List, or HM Treasury's financial or other sanctions regime.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[36px] font-bold font-Outfit py-4">
                {" "}
                Third Party Functionality{" "}
              </h5>
              <p className="md:text-[22px] lg:leading-[34px] font-normal font-Outfit">
                The Site, Functionality and App may contain links to Third-Party Functionality (including, without limitation, Dapps), and may leverage or plug into such Third Party Functionality to enable certain features, such as the Swapper. When using a Dapp, the Swapper or other Third Party Functionality, you understand that you are at no time transferring your assets or private keys to us. We provide the Site and access to the Swapper and other Third Party Functionality only as a convenience, do not have control over their content, and do not warrant or endorse, and are not responsible for the availability or legitimacy of, the content, products or functionality made accessible via the Swapper or by those Third Parties (including any related website, resources or links displayed therein). We make no warranties or representations, express or implied, about the Swapper or such linked Third Party Functionality, the third parties they are owned and operated by, the information contained on them or the suitability of their products or services. You acknowledge sole responsibility for and assume all risk arising from your use of the Functionality including any third-party website, applications, or resources.
                You may be able to link your Wallet to your accounts on third-party platforms, sites and services, to enable access to such accounts from your Wallet. In doing so, you understand and agree that all transactions made when accessing such accounts from your Wallet are subject to these Terms and to the terms of use, privacy policies, and other terms, conditions and policies imposed by the providers of such third-party sites, services and platforms.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[36px] font-bold font-Outfit py-4">
                {" "}
                Termination{" "}
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                We may terminate this Agreement and/or your access to and use of the Site and Functionality, in our sole discretion, at any time and without notice to you. You may cancel your Account, if you have one, at any time by removing the Wallet web browser extension and ceasing any and all use of the Site, Functionality and/or Content. Upon any termination, discontinuation or cancellation of this Agreement, the Functionality or your Account, (i) all rights and/or licenses granted to you under these Terms shall immediately cease and terminate and you shall forthwith cease the use of and/or access to the App, Site, Functionality and Content in any way whatsoever; and (ii) notwithstanding the foregoing, the following provisions will survive: Content and Content Rights, Content Ownership, Responsibility and Removal (except for the subsection "Rights in Content Granted by TowneSquare"), Termination, Warranty Disclaimers, Indemnity, Limitation of Liability, Dispute Resolution, and General Terms.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[36px] font-bold font-Outfit py-4">
                Warranty Disclaimers
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE SITE AND THE SERVICES (INCLUDING ANY PRIVATE KEY STORAGE SERVICE OFFERED AS PART OF THE SERVICES, WHETHER CLOUD OR HARDWARE-BASED) AND CONTENT IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH YOU. THE APP, SITE AND FUNCTIONALITY ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY REPRESENTATION OR WARRANTY, WHETHER EXPRESS, IMPLIED OR STATUTORY. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TOWNESQUARE SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND/OR NON-INFRINGEMENT. TOWNESQUARE DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES THAT ACCESS TO THE SITE OR SERVICES OR ANY OF THE MATERIALS CONTAINED THEREIN WILL BE CONTINUOUS, UNINTERRUPTED, TIMELY, OR ERROR-FREE. TOWNESQUARE DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES AS TO THE AVAILABILITY OR FUNCTIONALITY OF THE SOLANA NETWORK, OR THAT SOLANA NETWORK WILL OPERATE FREE FROM INTERRUPTIONS, DELAYS, DEFECTS AND/OR ERRORS THAT MAY DELAY, HINDER OR PREVENT THE TRANSMISSION OF TRANSACTIONS OR MESSAGES TO OR ON THE SOLANA NETWORK, OR ANY OTHER NETWORK. THE DURATION OF ANY IMPLIED WARRANTY THAT IS NOT EFFECTIVELY DISCLAIMED WILL BE LIMITED TO THE LONGER OF (I) THIRTY (30) DAYS FROM THE DATE THAT YOU FIRST USE THE APPLICABLE SERVICE AND (II) THE SHORTEST PERIOD ALLOWED UNDER APPLICABLE LAW. SOME STATES / JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
                USE OF ANY PRIVATE KEY STORAGE SERVICE INCLUDED AS PART OF THE SERVICES IS OFFERED TO YOU AS A CONVENIENCE, SUBJECT TO THE LIMITATIONS ABOVE. TO BE SAFE, YOU SHOULD ALWAYS BACK UP YOUR PRIVATE ACCESS KEY VIA SECONDARY MEANS.
                THE SITE AND FUNCTIONLITY RELY ON EMERGING TECHNOLOGIES, SUCH AS THE SOLANA NETWORK AND THIRD PARTY DECENTALIZED EXCHANGES. SOME FUNCTIONALITY IS SUBJECT TO INCREASED RISK THROUGH YOUR POTENTIAL MISUSE OF THINGS SUCH AS PUBLIC/PRIVATE KEY CRYPTOGRAPHY. BY USING THE SERVICES YOU EXPLICITLY ACKNOWLEDGE AND ACCEPT THESE HEIGHTENED RISKS. TOWNESQUARE SHALL NOT BE LIABLE FOR THE FAILURE OF ANY MESSAGE TO SEND TO OR BE RECEIVED BY THE INTENDED RECIPIENT IN THE INTENDED FORM, OR FOR DIMINUTION OF VALUE OF SOLANA OR ANY OTHER DIGITAL TOKEN OR DIGITAL ASSET ON THE SOLANA NETWORK OR ANY OTHER NETWORK, AND TOWNESQUARE MAKES NO REPRESENTATIONS OR WARRANTIES WITH RESPECT TO THE SAME.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[36px] font-bold font-Outfit py-4">
                No Professional Advice or Fiduciary Duties
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                All information provided in connection with your access and use of the Site and Functionality should not and may not be construed as legal, financial or professional advice. You should not take, and should refrain from taking, any action based on any information contained on the Site or in the Functionality, or any other information we make available at any time, including, without limitation, blog posts, articles, links to third-party content, discord or telegram content, news feeds, tutorials, tweets and videos. Before you make any financial, legal or other decisions involving the Site or Functionality or use thereof, you should seek independent professional advice from an individual who is licensed and qualified in the area for which such advice would be appropriate. The Terms are not intended to, and do not, create or impose any fiduciary duties on us. You further agree that the only duties and obligations that we have are expressly set out in these Terms (including in the Privacy Policy).
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[36px] font-bold font-Outfit py-4">
                Indemnity
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                You will indemnify, defend and hold harmless TowneSquare and its affiliates and its and their respective officers, directors, employees, agents and representatives (the "TowneSquare Parties"), from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees, arising out of, relating to or in any way connected with (i) your access to or use of the Site, Functionality or Content, (ii) your User Content, (iii) Third Party Functionality, or (iv) your violation of these Terms.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[36px] font-bold font-Outfit py-4">
                Limitation of Liability
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                THE TOWNESQUARE PARTIES SHALL NOT BE LIABLE UNDER ANY CIRCUMSTANCES FOR ANY LOST PROFITS OR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR OTHERWISE OUT OF OR IN CONNECTION WITH ANY AUTHORIZED OR UNAUTHORIZED USE OF THE SITE, THE APP OR THE SERVICES, EVEN IF AN AUTHORIZED REPRESENTATIVE OF TOWNESQUARE HAS BEEN ADVISED OF OR KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. TOWNESQUARE SHALL NOT BE LIABLE UNDER ANY CIRCUMSTANCES FOR DAMAGES ARISING OUT OF OR IN ANY WAY RELATED TO SOFTWARE, PRODUCTS, SERVICES, AND/OR INFORMATION OFFERED OR PROVIDED BY THIRD-PARTIES AND ACCESSED THROUGH THE APP, SITE OR SERVICES.
                SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. IN NO EVENT SHALL THE TOWNESQUARE PARTIES' TOTAL LIABILITY TO YOU FOR ALL DAMAGES (OTHER THAN AS MAY BE REQUIRED BY APPLICABLE LAW IN CASES INVOLVING PERSONAL INJURY) EXCEED THE AMOUNT OF ONE HUNDRED U.S. DOLLARS ($USD100.00) OR ITS EQUIVALENT IN THE LOCAL CURRENCY OF THE APPLICABLE JURISDICTION.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[36px] font-bold font-Outfit py-4">
                Acknowledgment of Certain Risks; Other Disclaimers; Release of Claims
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                By accessing and using the Functionality, you represent that you understand the inherent risks associated with using cryptographic and blockchain-based systems, and that you have a working knowledge of the usage and intricacies of Digital Assets. You further understand that the markets for these Digital Assets are highly volatile due to factors including (but not limited to) adoption, speculation, technology, security, and regulation. You acknowledge and accept that the cost and speed of transacting with cryptographic and blockchain-based systems such as Solana are variable and may increase dramatically at any time. You further acknowledge and accept the risk that your Digital Assets, or any Digital Assets you acquire, including through a third-party exchange accessed
                via the Swapper may lose some or all of their value and you may suffer loss due to the fluctuation of prices of tokens and/or significant price slippage and cost. You understand that anyone can create a token, including fake versions of existing tokens and tokens that falsely claim to represent projects, and acknowledge and accept the risk that you may mistakenly trade those or other tokens. You further acknowledge that we are not responsible for any of these variables or risks and that we cannot be held liable for any resulting losses that you experience while accessing or using the Site or Functionality.
                <br /><br />
                The Site and Functionality and your Digital Assets could be impacted by one or more government or regulatory inquiries or government or regulatory actions, which could impede or limit the ability of TowneSquare to continue to make its proprietary software, and thus, could impede or limit your ability to continue to use the Functionality.
                <br /><br />
                You understand and acknowledge that cryptography is a progressing field with advances in code cracking and other technical advancements, such as the development of quantum computers, which may present risks to Digital Assets and the services, and could result in the theft or loss of your Digital Assets. To the extent possible, we intend to update TowneSquare-developed smart contracts related to the Functionality to account for any advances in cryptography and to incorporate additional security measures necessary to address risks presented from technological advancements, but that intention does not reflect a binding commitment and does not in any way guarantee or otherwise ensure full security of the Functionality.
                <br /><br />
                You understand that the Solana and the Aptos blockchain (and all other networks with which the Functionality may be compatible) remains under development, which creates technological and security risks when using the Functionality in addition to uncertainty relating to Digital Assets and transactions therein. You acknowledge that the cost of transacting on the Solana blockchain is variable and may increase at any time, thereby impacting any activities taking place on the Solana blockchain, which may result in price fluctuations or increased prices for using the Functionality.
                <br /><br />
                You acknowledge that the Functionality is subject to flaws and that you are solely responsible for evaluating any code provided by the Site or Functionality. This warning and others TowneSquare provides in these Terms in no way evidence or represent any on-going duty to alert you of the potential risks of utilizing the Functionality or accessing the Site.
                <br /><br />
                Although we intend to provide accurate and timely information on the Site and during your use of the Site and the Functionality, that intention does not reflect a binding commitment, and the Site and other information available when using the Functionality may not be accurate, complete, error- free or current. To continue to provide you with as complete and accurate information as possible, information may be changed or updated from time to time without notice, including, without limitation, information regarding our policies. Accordingly, you should verify all information before relying on it in any manner, and all decisions based on such information contained on the Site or made available through the Functionality are your sole and absolute responsibility. No representation of any kind or nature is made as to the accuracy, completeness or appropriateness for any particular purpose of any pricing or other information distributed via the Site or Functionality. Pricing information may be higher or lower than prices available on platforms providing similar services.
                <br /><br />
                Any reference to a type of Digital Asset on the Site or otherwise during the use of the Functionality does not indicate our approval or disapproval of the technology on which the Digital Asset relies,
                and should not be used as a substitute for your understanding of the risks specific to each type of Digital Asset and the use and availability of any particular blockchain.
                <br /><br />
                Use of the Functionality, in particular for trading Digital Assets, may carry financial risk. Digital Assets are, by their nature, highly experimental, risky, and volatile. Transactions entered into in connection with the Functionality are irreversible, final and there are no refunds. You acknowledge and agree that you will access and use the Site and the Functionality at your own risk. The risk of loss in trading Digital Assets can be substantial (all the more so if you are leveraged). You should, therefore, carefully assess whether such trading is suitable and appropriate for you in light of your circumstances and financial resources. By using the Site and Functionality, you represent and warrant that you have been, are, and will be solely responsible for making your independent appraisal and investigations into the risks of a given transaction and the underlying Digital Assets. You represent that you have sufficient knowledge, market sophistication, professional advice, and experience to make your evaluation of the merits and risks of any transaction conducted in connection with the Functionality or any Digital Asset. You accept all consequences of using the Functionality, including the risk that you may lose access to your Digital Assets indefinitely. All transaction decisions are made solely by you. Notwithstanding anything in these Terms, we accept no responsibility whatsoever for, and will in no circumstances be liable to you in connection with, your use of the Functionality for performing Digital Asset transactions.


                TowneSquare is a developer of software. TowneSquare is not a broker, nor is it a dealer or arranger, nor does it operate a Digital Asset exchange platform or offer trade execution or clearing services and, therefore, has no oversight, involvement, or control concerning the transactions you choose to conduct via the Functionality. All transactions between users of TowneSquare-developed software are executed peer-to-peer directly between the users' Solana/Aptos (or other network) addresses through smart contracts. You are responsible for complying with all laws that may be applicable to or govern your use of the Functionality, including, but not limited to, the Commodity Exchange Act and the regulations promulgated thereunder by the U.S. Commodity Futures Trading Commission ("CFTC"), the federal securities laws and the regulations promulgated thereunder by the U.S. Securities and Exchange Commission ("SEC") and all foreign laws that apply to you and your trading.
                <br /><br />
                You understand that TowneSquare and the Swapper are not registered or licensed by the CFTC, SEC, or any other financial regulatory authority (whether in the United States or elsewhere). No financial regulatory authority has reviewed or approved the use of the TowneSquare-developed software that comprises the Site and the Functionality. The Site and the TowneSquare-developed software do not constitute advice or a recommendation concerning any commodity, security, or other Digital Asset or instrument. TowneSquare is not acting as an investment manager, adviser, arranger, introducer or commodity trading adviser to any person or entity.
                <br /><br />
                You expressly agree that you assume all risks in connection with your access and use of the Site and Functionality and your interaction therewith. You further expressly waive and release the TowneSquare Parties from any and all liability, claims, causes of action, or damages arising from or in any way relating to your use of the Site and Functionality and your interaction therewith.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[36px] font-bold font-Outfit py-4">
                Dispute Resolution
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                These Terms shall be construed and enforced in accordance with the laws of the Republic of Singapore, notwithstanding its choice of law provisions.
                <br /><br />
                You and we agree that any dispute that cannot be resolved through the procedures set forth above will be resolved through binding arbitration in accordance with the International Arbitration Rules of the International Centre for Dispute Resolution. The place of arbitration shall be Singapore. The language of the arbitration shall be English. The prevailing party will be entitled to an award of their reasonable attorney’s fees and costs. Except as may be required by law, neither a party nor its representatives may disclose the existence, content, or results of any arbitration hereunder without the prior written consent of both parties.
                <br /><br />
                Any questions, complaints or claims with respect to the App, the Site, or the Functionality should be directed to: &nbsp;<a target="_blank" href="mailto:support@townesquare.xyz" style={{ color: "blue" }}>support@townesquare.xyz.</a>
              </p>
            </div>
            <div className="mb-8">
              <h5 className="md:text-[36px] font-bold font-Outfit py-4">
                Contact Information
              </h5>
              <p className="md:text-[22px] md:leading-[34px] font-normal font-Outfit">
                If you have any questions about these Terms or the Functionality, please contact us at
                <br />
                <a target="_blank" href="mailto:support@townesquare.xyz" style={{ color: "blue" }}>support@townesquare.xyz.</a>
              </p>
            </div>
          </div>
          <div className="mb-20">
            <Link
              className="text-[#B882FF] flex text-[22px] font-Outfit font-medium leading-[34px]"
              to="/"
            >
              <img src="/assets/home/ArrowLeft.svg" className="mr-2" alt="back" />
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
