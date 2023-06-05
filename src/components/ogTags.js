import * as React from 'react';
const OpenGraphTags = ({ location, title }) => {
    return <>
        <meta name="description" content="Open Source Integration and Data Platform" />
        <meta property="og:title" content={`${title || 'Open Source Integration and Data Platform'} | cptn.io`} />
        <meta property="og:url" content={`https://www.cptn.io${location?.pathname || '/'}`} />
        <meta property="og:image" content="https://www.cptn.io/images/og-image.png?v=3" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Free, Open Source MIT licensed Integration and Data Platform" />
        <meta name="keywords" content="integration platform, data platform, data transformations, ETL, Cloud data platform, CDP" />
    </>
}

export default OpenGraphTags;