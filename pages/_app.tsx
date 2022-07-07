import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';


const MyApp = ({ Component, pageProps }: AppProps) => {
  // isSSR and setSSR used to prevent errors, check if application is Server Side Rendering.
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, [])

  if(isSSR) return null;
  

  return <Component {...pageProps} />
}

export default MyApp
