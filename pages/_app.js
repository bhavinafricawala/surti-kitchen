/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import '../styles/slide.css';
import '../styles/footer.css';

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
