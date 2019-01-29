import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`modern web application`, `tutorial`]} />
    <section>
      <h1>Purpose</h1>
      <hr />
      <p>
        Web applications are becoming more and more complex as the industry matures.
        We’re seeing a large push towards performance, efficiency, and resiliency, which can sometimes come at the cost of developer satisfaction.
      </p>
      <p>
        First, we'll define what a "modern web application" means, then we’ll go through the process of getting a sample web application up and running using the following:
      </p>
      <ul>
        <li>NodeJS on Express</li>
        <li>Ruby on Rails</li>
        <li>PHP on Laravel</li>
        <li>Python on Django</li>
      </ul>
      <p>
        Once you've completed these tutorials, you’ll begin to feel a sense of ownership over your projects and feel empowered to implement these practices on new and existing code bases.
      </p>
    </section>
    <section>
      <h1>What is a Modern Web Application</h1>
      <hr />
      <p>The definition of a modern development environment is constantly changing. We’re moving towards a more modular, performant, and resilient architectures when crafting our web applications. Let’s break these three higher-level goals down to create a list of criteria that each of our environments must maintain to be considered “modern”.</p>

      <dl>
        <dt>Modular</dt>
        <dd>
          <p>To keep our applications <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a>, we are seeing a trend towards making our code more modular. This involves breaking our HTML into reusable templates that serve smaller purposes. We can see examples of this in patterns such as <a href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a>, so we’ll define our first web application environment requirement as the ability to create and maintain HTML templates that can be reused on our site.</p>
          <p>This concept applies just as much to CSS as it does to HTML. We’ll want to write CSS that matches up one-to-one with our HTML templates, which is going to be easiest to do with the help of a pre-processor. In our case, our next requirement for our modern environment will be to configure and use <a href="https://sass-lang.com/">SASS</a> as a CSS pre-processor.</p>
          <p>When we’re looking at how to apply this concept to our Javascript, we’ll want to enable ourselves to break our logic up by using the `export` and `import` syntax not yet available to us in normal Javascript. This means we’ll want to take advantage of some newer Javascript techniques that will bring us to our third requirement: configuring the ability to transpile newer Javascript using <a href="https://babeljs.io/">Babel</a>.</p>
        </dd>
        <dt>Performant</dt>
        <dd>
          <p>If you still need to be convinced about the need for a more performant web, feel free to browse the awesome case studies at <a href="https://wpostats.com/">WPO Stats</a>, a curated list by <a href="https://timkadlec.com/">Tim Kadlec</a>. When thinking about performance for our web application, we’ll be taken to our next requirement: Implementing HTTP/2. This will come with a dependent requirement: Securing our traffic by using SSL (HTTPS).</p>
        </dd>
        <dt>Resilient</dt>
        <dd>
          <p>A web application that fails is not one worth building. If we’re going to put something out there, on the web for all to see, it’s our job to ensure that they see something more than just our error pages. To do this, we’ll get another environment requirement: The ability to test both our front-end and back-end code to ensure its resilience and ability to fail gracefully when necessary.</p>
        </dd>
      </dl>
    </section>
  </Layout>
)

export default IndexPage;
