import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const NodejsOnExpressPage = () => (
  <Layout>
    <SEO title="NodeJS on Express" keywords={[`modern web application`, `tutorial`]} />
    <h1>Modern NodeJS on Express</h1>
    <hr />

    <h2>Prerequisites</h2>
    <p>This section will outline all of the prerequisite software that you’ll need to have installed before going through this tutorial.</p>
    <h3>Terminal</h3>
    <p>To go through this tutorial you'll need some familiarity with running commands inside of a terminal, or command line. If you are not comfortable with that at this time, please take some time to familiarize yourself with your terminal of choice with a tutorial such as this. Anytime a reference is made to "running a command" in the README, it will imply that you are typing the command into this terminal and hitting ENTER.</p>
    <h3>NodeJS</h3>
    <p>Make sure that NodeJS and NPM (Node Package Manager) are installed on your system. Once you've confirmed that you can run node -v and npm -v successfully in the terminal (they should output a version number such as, but not limited to,  "v10.0.0" or "5.6.0" on a new line) you can proceed.</p>
    <h3>OpenSSL</h3>
    <p>To do this, you'll need the ability to create public and private keys for your machine. This should be installed on your system by default if you are using a Linux or Mac operating system. To check, open your terminal and run openssl version. If you are using Windows, ensure you have OpenSSL on your machine by installing it using a “How To” guide such as this.</p>
    <hr />

    <h2>Initial Setup</h2>
    <p>To get started with Express, you'll need to run some things (this is sample text now I'm just making it up):</p>
    <code><pre>npm install express-generator -g</pre></code>
    <hr />

    <h2>HTML Templating</h2>
    <p>Here's some code that we might have someone copy into a file called <code>index.html</code>:</p>
    <pre>
      <code>
&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world.&lt;/h1&gt;
    &lt;script src="./app.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
      </code>
    </pre>
    <hr />

    <h2>CSS Preprocessing</h2>
    <hr />

    <h2>Security using SSL</h2>
    <hr />

    <h2>JavaScript Transpiling</h2>
    <hr />

    <h2>Front-End Testing</h2>
    <hr />

    <h2>Back-End Testing</h2>
    <hr />
  </Layout>
);

export default NodejsOnExpressPage;