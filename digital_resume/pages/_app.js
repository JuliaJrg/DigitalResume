import Layout from '../components/Layout';
import Head from '../components/Head';
import '../styles/globals.css';
import '../styles/theme.css';

function MyApp({ Component, pageProps }) {
  const pageTitle = pageProps.title || 'Julia Jorge - Portfolio';

  return (
    <Layout>
      <Head title={pageTitle} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp