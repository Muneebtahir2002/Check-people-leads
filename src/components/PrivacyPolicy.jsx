import React from 'react';
import APPBAR from '../small components/AppBar2';
import '../css/Privacypolicy.css';
import Footer from '../small components/Footer2';
import Table2 from '../small components/Table2';
const Privacy = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <APPBAR />
      <div>
      <h2 className='head-head2'>Endato Privacy Policy</h2>
      <p className='p-p1'>
      Last Updated: 03/01/2022
        </p>
        <p className='paragrapgh-policy'>
        Endato, an Enformion, LLC solution (“Enformion”, “us”, “our” or “we”), who owns and controls the website found at www.endato.com, has developed this Privacy Policy which details important information regarding the use and disclosure of user information collected on www.endato.com, and any successor websites, (collectively, the “Site”), and other interactive properties, including but not limited to our mobile applications and mobile-focused websites (the Site and other Endato interactive properties are collectively referred to herein as the “Endato Applications”). This Privacy Policy also applies to our offline collection of information, including information collected over the phone by Customer Care. Endato provides this Privacy Policy to help you make an informed decision about whether to use or continue to use the services provided by Endato (“Services”).
        </p>
        <p className='paragrapgh-policy'>
        This Privacy Policy is incorporated into and subject to our Terms of Use (“Terms”). By clicking your acceptance of this Privacy Policy and Terms of Use during the registration process on the Endato Applications you are entering into a legally binding agreement with Endato based upon the terms of these policies. Each time that you access Endato Applications or our Services you signify that you agree to be bound by the Terms and, this Privacy Policy, and acknowledge that we are not providing you with a consumer report, and agree that you will not use the information obtained from us for any purpose covered by the Fair Credit Reporting Act (15 U.S.C. §1681, et seq.). If you do not agree to the Terms of Use and this Privacy Policy, you must discontinue using the Endato Applications or Services.
        </p>
        <p className='paragrapgh-policy'>
        I. INFORMATION WE COLLECT
        </p>
        <p className='paragrapgh-policy'>
        We have collected the following information in the past 12 months:
        </p>
        <Table2 />
        <p className='paragrapgh-policy'>
        A. Information Provided Directly by You
        </p>
       <li>
       Identifiers. We collect identifiers from you such as your name, postal address, email address and account name if you register with us or subscribe to our Services.
       </li>
       <li>
       Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)). We collect information such as your name, address, email address, credit card or debit card number when you register with us and/or purchase certain products and services. Endato Applications require payment from you by credit/debit card (“Billing Information”). Our third party payment processor processes Billing Information on our behalf to verify and complete the purchase transaction.  If you are purchasing a recurring billing subscription, we store limited Billing Information (i.e., encrypted card information and expiration date).
       </li>
       <li>
       Commercial information. We collect information about the products or services you have purchased through our Services.
       </li>
       <li>
       Internet or other similar network activity. When you are searching for people, you may enter third party personal information such as their name, address, phone number, or email address. We only use the data you input to provide you with a search request. We retain the results of your search requests, connected to your account, for a period of time at our discretion but do not use that information for any other purpose and have no obligation to maintain such search results.
       </li>
       <li>
       Geolocation data. We collect information about the cities and states in which you are located.
       </li>
        <div style={{ padding: 100 }} />
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
