import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkshopPage = () => (
  <Layout>
    <SEO title="Workshop" keywords={[`modern web application`, `tutorial`]} />
    <h1>Workshop</h1>
    <p>The workshop for frontend developers who want to learn today’s best practices in full-stack application development along with an introduction to many of today’s top-used development environments.</p>
    <hr />

    <q style={{textAlign: 'center', display: 'block', marginBottom: '20px'}}>Let’s face it, setting up a new application seems daunting. <br />It doesn’t have to be. We’ll show you what goes on behind the scenes as we navigate different languages and frameworks and get comfortable with the idea of a brand new codebase.</q>

    <h2>Description</h2>
    <p>Web applications are becoming more and more complex as our industry matures. Years ago being a front-end developer required learning HTML, CSS, and enough Javascript to open a modal. Today, adding a new page to a Rails application means changing route definitions, creating controllers, and running database migrations. If that sounds intimidating, than this workshop is for you. We'll explain the core concepts behind a modern web application while we set them up using some of our industry’s top-used languages and frameworks in a way that minimizes complexity and makes development easy.</p>

    <h2>Promise</h2>
    <p>Together, we’ll navigate different languages and frameworks while we learn the core concepts behind a modern web application. You’ll begin to feel a sense of ownership over your projects and feel empowered to implement these practices on new and existing code bases.</p>

    <h2>Target Audience</h2>
    <ul>
      <li>A front-end developer on a larger team looking to understand more of the "behind the scenes" work</li>
      <li>Not totally sure what happens between a URL being typed and a page being displayed</li>
      <li>Familiar with front-end development but setting up a brand new application sounds scary</li>
      <li>Interested in learning the differences of our industry's top used languages and frameworks</li>
    </ul>
  </Layout>
);

export default WorkshopPage;