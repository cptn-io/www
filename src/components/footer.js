import * as React from 'react';
import { Link } from 'gatsby'

const Footer = ({ isPrimary }) => <section className={`footer section ${isPrimary ? 'has-background-primary has-text-white' : 'has-background-white'} p-1`}>
  <div className="mb-2 has-text-centered">
    <span className="mx-2">
      <Link to="/terms">Terms of Service</Link>
    </span>
    <span className="mx-2">
      <Link to="/privacy">Privacy Policy</Link>
    </span>
    <span className="mx-2">
      <Link to="/cookie_policy">Cookie Policy</Link>
    </span>
  </div>
  <div className="mt-0 has-text-centered">
    Copyright &copy; 2023 DevRaven Inc. All rights reserved. <Link className="ml-2" to="/terms">Terms of Service</Link><Link className="ml-2" to="/privacy">Privacy Policy</Link>
  </div>
</section>

export default Footer;