import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import '../styles/globals.css';
import '../styles/theme.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      )
    }
  }, [])

  return (
    <Layout>
      <Head title={`Julia Jorge | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp