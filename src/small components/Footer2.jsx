import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer2.css';

const Footer = () => {
  return (
    <div style={{ padding: 100 }} className='footer-footerland'>
      <div>
        <h1 className='head5'>Questions About Our Data API?</h1>
        <p className='p10'>
          Want more details about our people data, usage of different endpoints, or volume pricing? Sign up for a FREE consultation today.
        </p>
        <button className='button-button-talks'>Let's talk</button>
      </div>
      <div className='container-headlinks'>
        <FooterCategory title="Category 1" links={['/check-api/checkpeopleleadapi', '/check-api/checkpeopleleadsbatch', '/check-api/checkpeopleleadssearch']} names={['Check people Leads Api', 'Check people Leads Batch', 'Check people Leads Search']} />
        <FooterCategory title="Category 2" links={['/check-api/people-data', '/check-api/work-data', '/check-api/property-data', '/check-api/courtrecord-data','/check-api/assets-data','/check-api/license-data']} names={['People Data', 'Work Data', 'Property Data', 'Court Record API','Assets Data','License Data']} />
        <FooterCategory title="Category 3" links={['/check-api/marketing-data', '/check-api/sales-data', '/check-api/developers-data', '/check-api/realtors-data']} names={['Marketing', 'Sales', 'Developers', 'Realtors']} />
        <FooterCategory title="Category 4" links={['/check-api/blognews', '/check-api/workplace', '/check-api/helpcenter', '/category4/link4']} names={['Blog, News and Tips', 'Workplace and Bussiness Directory', 'Help Center', 'Link D']} />
      </div>
    </div>
  );
};

const FooterCategory = ({ title, links, names }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <h2 className='link-heads'>{title}</h2>
      <div className='link-Column'>
        {links.map((link, index) => (
          <Link key={index} to={link} onClick={scrollToTop}>
            {names[index] || `Link ${index + 1}`}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
