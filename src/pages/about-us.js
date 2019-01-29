import { Link } from 'gatsby'
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutUsPage = () => (
  <Layout>
    <SEO title="About Us" keywords={[`modern web application`, `tutorial`]} />
    <h1>About Us</h1>
    <img alt="Melissa Thompson" src="https://seesparkbox.com/uploads/employee_images/melissa-thompson.jpg" />
    <h2>Melissa Thompson</h2>
    <p>Some text about who Melissa is. Maybe a link to her website or Twitter, who knows?</p>

    <img alt="Byron Delpinal" src="https://seesparkbox.com/uploads/employee_images/byron-delpinal.jpg" />
    <h2>Byron Delpinal</h2>
    <p>Some text about who Byron is. Maybe a link to his website or Twitter, who knows?</p>

    <h2>Sparkbox</h2>
    <p>We work for a company called Sparkbox. They do really awesome stuff there. <a href="https://seesparkbox.com">Check them out!</a></p>
  </Layout>
);

export default AboutUsPage;