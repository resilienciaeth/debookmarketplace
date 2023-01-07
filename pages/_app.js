import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const desiredChainId = ChainId.Mainnet;
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <ThemeProvider
        attribute="class"
      >
        <div className="bg-white min-h-screen max-h-screen">
          <Navbar />
          <Component {...pageProps} />
        </div>
        <Script src="https://kit.fontawesome.com/4e0b8e54bb.js" crossOrigin="anonymous" />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
export default MyApp;
