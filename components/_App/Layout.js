import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>ConnectedTech</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="ConnectedTech" />
                <meta name="og:title" property="og:title" content="ConnectedTech"></meta>
                <meta name="twitter:card" content="ConnectedTech"></meta>
                <link rel="canonical" href="https://nezox-react.envytheme.com/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;