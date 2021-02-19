import { AppProps } from 'next/dist/next-server/lib/router/router';
import GlobalStyle from '../styles/GlobalStyle';
import { Amplify } from 'aws-amplify';
import awsExport from '../aws-exports';

Amplify.configure({ ...awsExport, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
