import * as React from 'react';
import { Link } from 'gatsby'
import { useState } from 'react';

const NavBar = (props) => {
  const [expanded, setExpanded] = useState(false);

  return <nav className={`navbar${props.isPrimary ? ' is-primary' : ''}`} role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item py-0" to="/">
          {props.isPrimary ? <img alt="Logo" src="images/logo_dark.png" className="box-logo" /> :
            <img alt="DevRaven logo" src="/images/logo_light.png" className="box-logo" />}
        </Link>

        <button id="navbar-burger" className="navbar-burger" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample" onClick={() => setExpanded(current => !current)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbar-end" className={`navbar-end${expanded ? '' : ' is-hidden-touch'}`}>
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <a href="https://docs.cptn.io" className="navbar-item">
          Docs
        </a>
        <div className="navbar-item">
          <div className="buttons">
            <a href="https://discord.gg/ZGFyzhDjZ2" className="button is-light">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-discord-filled" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.94 0 -2.257 -1.596 -2.777 -2.969l-.02 .005c.838 -.131 1.69 -.323 2.572 -.574a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.725 .207 1.431 .373 2.126 .499l.444 .074c-.477 1.37 -1.695 2.965 -2.627 2.965c-1.743 0 -3.276 -1.555 -4.267 -3.644c-.841 -2.206 -.369 -6.868 1.414 -12.174a1 1 0 0 1 .358 -.49c1.392 -1.016 2.807 -1.475 4.717 -1.685a1 1 0 0 1 .938 .435l.063 .107l.652 1.288l.16 -.019c.877 -.09 1.718 -.09 2.595 0l.158 .019l.65 -1.287a1 1 0 0 1 .754 -.54l.123 -.01zm-5.983 6a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" strokeWidth="0" fill="currentColor"></path>
              </svg>
            </a>
            <a href="https://github.com/cptn-io/el-cptn" className="button is-light">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github-filled" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" strokeWidth="0" fill="currentColor"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default NavBar;