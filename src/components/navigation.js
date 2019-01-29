import { Link } from 'gatsby'
import React from 'react'

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/workshop">Workshop</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li>
        Tutorials
        <ul>
          <li>
            <Link to="/tutorials/nodejs-on-express">
              NodeJS on Express
            </Link>
          </li>
          <li>
            <Link to="/tutorials/ruby-on-rails">
              Ruby on Rails
            </Link>
          </li>
          <li>
            <Link to="/tutorials/php-on-laravel">
              PHP on Laravel
            </Link>
          </li>
          <li>
            <Link to="/tutorials/python-on-django">
              Python on Django
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)

export default Navigation
