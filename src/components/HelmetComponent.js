import React from 'react';
import Helmet from 'react-helmet';

function HelmetComponent(props) {

    let title, desc;
    title = !props.meta.title ? "shafitek.com - Yoosuf Shafi" : props.meta.title + " - shafitek.com";
    desc = !props.meta.desc ? "The official website of Yoosuf Shafi." : props.meta.desc;

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={desc} />
      </Helmet>
    );
}

export default HelmetComponent;
