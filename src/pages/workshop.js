import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PhpOnLaravelPage = () => (
  <Layout>
    <SEO title="Workshop" keywords={[`modern web application`, `tutorial`]} />
    <h1>Workshop</h1>
    <p>The workshop for frontend developers who want to learn today’s best practices in application development along with an introduction to many of today’s top-used development environments.</p>
    <hr />

    <q>Let’s face it, sometimes setting up a new application seems daunting. <br />It doesn’t have to be. We’ll show you what goes on behind the scenes as we navigate different languages and frameworks and get comfortable with the idea of a brand new codebase.</q>

    <h2>Description</h2>
    <p>Web applications are becoming more and more complex as the industry matures. We’re seeing a large push towards performance, efficiency, and resiliency, which can sometimes come at the cost of developer satisfaction. We’ll explain the core concepts behind a modern web application as we demonstrate how to apply each one to our industry’s top-used languages and frameworks in a way that minimizes complexity and makes development easy.</p>

    <h2>Our Promise To You</h2>
    <p>Together, we’ll navigate different languages and frameworks while we learn the core concepts behind a modern web application. You’ll begin to feel a sense of ownership over your projects and feel empowered to implement these practices on new and existing code bases.</p>

    <h2>Workshop Topics</h2>
    <ul>
      <li>HTML Templating</li>
      <li>CSS Preprocessing</li>
      <li>Back-End MVC Architecture</li>
      <li>Introduction to Database Migrations</li>
      <li>Front-End and Back-End Unit Testing</li>
      <li>Security through SSL</li>
    </ul>




  </Layout>
);

export default PhpOnLaravelPage;