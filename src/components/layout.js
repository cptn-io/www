import * as React from 'react';
import Footer from "./footer";
import NavBar from "./navbar";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { install } from 'ga-gtag';

const Layout = ({isNavPrimary, children }) => {
    const onAcceptCookies = () => {        
        install('G-CLPNFR3HQF'); 
    }

    React.useEffect(() => {            
        if (getCookieConsentValue('hasConsent') === "true") {
            onAcceptCookies();
        }
    }, []);

    return <main>
        <CookieConsent contentClasses="column is-two-thirds-tablet" buttonWrapperClasses="column is-flex is-align-items-center is-justify-content-center" buttonText="Accept" declineButtonText="Decline" disableStyles={true} containerClasses="columns is-gapless m-0 p-4 cookie-banner with-shadow has-background-primary-light has-text-grey-dark" enableDeclineButton declineButtonClasses="button" buttonClasses="button is-primary ml-2" cookieName="hasConsent">
        This website uses cookies to improve your browsing experience and analyze traffic trends. By clicking 'Accept' or continuing to browse the site, you agree to the use of cookies.
        </CookieConsent>       
        <NavBar isPrimary={isNavPrimary}/>
        {children}
        <Footer isPrimary={isNavPrimary}/>
    </main>
}

export default Layout;